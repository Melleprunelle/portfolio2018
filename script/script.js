function trololo() {
    document.getElementById("home").style.transition = "1s";
    document.getElementById("home").style.marginTop = "-100vh";
}

$(document).ready(function () {
    function doAnimation() {
        $("#buttonbounce").effect("bounce", {
            times: 3
        }, 1000, doAnimation);
    }
    doAnimation();
});