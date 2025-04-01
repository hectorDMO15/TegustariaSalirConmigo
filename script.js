document.addEventListener("DOMContentLoaded", function () {
    const btnNo = document.querySelector("#btn-random");

    function moverAleatoriamente(btn) {
        const maxWidth = window.innerWidth - btn.clientWidth - 20;
        const maxHeight = window.innerHeight - btn.clientHeight - 20; 

        const newX = Math.random() * maxWidth;
        const newY = Math.random() * maxHeight;

        btn.style.position = "absolute";
        btn.style.left = `${newX}px`;
        btn.style.top = `${newY}px`;
    }

    if (btnNo) {
        btnNo.addEventListener("mouseover", function () {
            moverAleatoriamente(btnNo);
        });

        btnNo.addEventListener("click", function (event) {
            event.preventDefault();
            moverAleatoriamente(btnNo);
        });
    }
});
