let x = 0;
let b, d;
function clicked(a, c) {
    if(b == null) { }
    else {
        b.style.opacity = "0";
        d.classList.toggle("tap");
    }
    x = Math.floor(Math.random() * 3);
    b = document.getElementById(x);
    b.style.opacity = "1";
    c.classList.toggle("tap");
    d = c;
    clearInterval(0.3)
}