const actionLink = document.querySelectorAll(".link-card .link-action")
// Definisikan actionLink
// Di select all, pake query, trus classnya dalam linkcard dan linkaction

actionLink.forEach((action) => {

    // Actionnya pas di klik yagesyak. Buat animasi clipboard
    action.addEventListener("click", (e) => {
        // // prevent default buat biar ga open tab baru pas copy clipboard
        // e.preventDefault();
        // console.log("action :", action.parentElement);
        // const url = action.parentElement.getAttribute("href");
        // // Ini mendefinisikan kalo bisa ke link yang dimauin
        // console.log("url : ", url);
        // // Bawah ini buat copy ke clipboard
        // navigator.clipboard.writeText(url); (BIAR MEMO GA BANYAK, DAN GAUSAH PAKE VARIABEL BANYAK) BUAT MENGHEMAT JADI CUMAN=>
        
            e.preventDefault(e);
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

        // Buat munculin notip
        document.getElementById("toast").innerHTML = `
            <div class="toast-container">
                <p>✅ Link <strong> ${action.parentElement.innerText} </strong> berhasil disalin!</p>
            </div> 
        `;

        // Buat ngilangin notip
        setTimeout((e) => {
            document.querySelector("#toast .toast-container")
            .classList.add("toast-gone")
        }, 300);

        setTimeout((e) => {
            document.querySelector("#toast .toast-container").remove(e);
        }, 2000);
    });
});

// Buat animasi fill clipboardnya
document.querySelectorAll(".link-action i").forEach((action) => {
    action.addEventListener("mouseenter", (e) => {
        action.classList.remove("ph");
        action.classList.add("ph-fill");
    });

    action.addEventListener("mouseleave", (e) => {
        action.classList.remove("ph-fill");
        action.classList.add("ph");
    });
});

// Buat ganti ikon sosmed saat hover
document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", (e) => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });

    sosmed.addEventListener("mouseleave", (e) => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    });
});

// Animasi bergerak saat scroll
document.addEventListener("scroll", (e) => {
    document.querySelector(
        ".bg-text-animation").style.transform = `translateX(${window.scrollY/5}px)`;
});
