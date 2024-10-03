modal();
accordion();
changePageLightBest()


function accordion() {
    const acc = document.getElementsByClassName("acc_title");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("acc_active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

function changePageLightBest() {
    const light = document.getElementById("btnLight");
    const best = document.getElementById("btnBest");
    const bestPage = document.getElementById("home_best")
    const lightPage = document.getElementById("home_light")

    function togglePage() {
        bestPage.classList.toggle('hide');
        lightPage.classList.toggle('hide');
        light.classList.toggle('active');
        best.classList.toggle('active');
    }

    light.addEventListener("click", togglePage);
    best.addEventListener("click", togglePage);
}

function modal() {
    const overlay = document.getElementById("overlay");
    const modal_old = document.getElementById("modal_old");
    const modal_cookie = document.getElementById("modal_cookie");
    const yes = document.getElementById("btn_yes");
    const yes_cookie = document.getElementById("btn_yes_cookie")
    const img_close = document.getElementById("img_close");
    const img_close_cookie = document.getElementById("img_close_cookie");
    const btn_no_cookie = document.getElementById("btn_no_cookie")

    function closeModalOld21() {
        modal_old.classList.add('hide');
     }

    function closeModalCookie() {
        modal_cookie.classList.add('hide');
        overlay.classList.add('hide')
    }

    yes.addEventListener("click", closeModalOld21)
    img_close.addEventListener("click", closeModalOld21)
    yes_cookie.addEventListener("click", closeModalCookie)
    img_close_cookie.addEventListener("click", closeModalCookie)
    btn_no_cookie.addEventListener("click",closeModalCookie)
}