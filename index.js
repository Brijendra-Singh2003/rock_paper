let x = 0;
let b;
function clicked(a, c) {
    if(b == null) { }
    else {b.style.scale = "0";}
    x = Math.floor(Math.random() * 3);
    c.classList.toggle("tap");
    const interval = setInterval (() => {
        c.classList.toggle("tap");
        clearInterval(interval);
    }, 300);

    b = document.getElementById(x);
    b.style.scale = "1";
}
