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