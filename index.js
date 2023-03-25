let x = 0;
let b, d;
function clicked(a, c) {
    if(b == null) { }
    else {
        d.style.scale = "1";
        b.style.opacity = "0";
    }
    x = Math.floor(Math.random() * 3);
    b = document.getElementById(x);
    b.style.opacity = "1";
    // c.style.animationName = "go";
    // c.style.animationDuration = "300ms";
    c.style.scale = "0.9";
    d = c;
    clearInterval()
}