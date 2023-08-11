


window.addEventListener("resize", resize);
resize();
init();

function resize() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let size = "";
    let elem = document.querySelector(".clock");
    if (width > height) {
        elem.style.setProperty("--size-clock", height + "px");
        size = height;
    } else {
        elem.style.setProperty("--size-clock", width + "px");
        size = width;
    }
    if (size < height) {

    }
}

function init() {
    let curretSec = getSecondsToday();
    let seconds = (curretSec / 60) % 1;
    let minutes = (curretSec / 3600) % 1;
    let hours = (curretSec / 43200) % 1;
    setTime(seconds * 60, "second");
    setTime(minutes * 3600, "minute");
    setTime(hours * 43200, "hour");
    let arr = document.querySelectorAll(".clock__section");
    let txt = "";
    for (let i = 0; i < arr.length; i++) {
        txt = `rotateZ(${6 * (i + 1)}deg)`;
        arr[i].style.transform = txt;
    }
}

function setTime(left, hand) {
    let elem = document.querySelector(".clock__" + hand);
    elem.style["animation-delay"] = left * -1 + "s";
}

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.round(diff / 1000);
}
