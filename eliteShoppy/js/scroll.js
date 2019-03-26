var button = document.querySelector(".button");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 400 || document.body.scrollTop > 400) {
        button.style.height = "50px";
    } else {
        button.style.height = "0px";
    }
}

button.onclick = function () {
    $(document.documentElement).animate({
        scrollTop: 0
    }, 1000);
//for Chorme, Opera, Firefox, IE    

    $(document.body).animate({
        scrollTop: 0
    }, 1000);
//for Safari
}