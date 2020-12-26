
function myFunction1() {
    var x = document.getElementById("notification-area");
    var y = document.getElementById("music-area");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}
function myFunction2() {
    var x = document.getElementById("music-area");
    var y = document.getElementById("notification-area");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none";
    }
    else {
        x.style.display = "block";
        y.style.display = "none";
    }
}
function myFunction3() {
    var z = document.getElementById("goster");
    var x = document.getElementById("hidden-message-details");
    var y = document.getElementById("show-message-details");
    if (x.style.display === "none") {
        x.style.display = "flex"
        y.style.opacity = 0
    }
    else {
        x.style.display = "none";
        y.style.opacity = 1
        z.style.zIndex = 3
    }
}

$(".Header-switch").on("click", function () {
    if ($(".Header").is(".menu-show")) {
        $(".Header").removeClass("menu-show")
        $(".Header").removeClass("menu-sticky")

    }
    else {
        $(".Header").addClass("menu-show")
        $(".Header").addClass("menu-sticky")
    }
})
