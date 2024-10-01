accordion();


function accordion(){
    const acc = document.getElementsByClassName("acc_title");
console.log(acc)
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
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

