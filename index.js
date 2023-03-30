let x = 0;
let b, d;
function clicked(a, c) {

    c.classList.toggle("tap");

    const interval = setInterval (() => {
        c.classList.toggle("tap");
        clearInterval(interval);

    }, 300);

    x = Math.floor(Math.random() * 3);

    if(b == null) {
        b = document.getElementById(x);
        b.style.scale = "1";
    }
    else {
        let i = 0;
        b.style.scale = "0";
        const interval2 = setInterval (() => {

            b = document.getElementById(x);
            b.style.scale = "1";

            if(i >= 1) {
                clearInterval(interval2);
            }
            i += 1;

        }, 300);
    }
}
