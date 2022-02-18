window.onload = function () {
    let names = document.getElementsByClassName('text')

    attempt = ''

    function update() {
        for (let i = 0; i < 5; i++) {
            names[i].innerHTML = attempt[i] == undefined ? ' ' : attempt[i];
        }
    };

    const p = "zombi".toUpperCase();
    // var choice;

    // TODO: check for letter pos
    function check() {
        for (let i = 0; i < 5; i++) {
            if (p[i] == attempt[i]) {
                names[i].classList.add('right-pos')
            }
            else if (p.includes(attempt[i])) {
                names[i].classList.add('wrong-pos');
            }
            else {
                names[i].classList.add('not-in')
            }
        }
    }

    function shake() {
        const input_ = document.getElementById('input')
        // Add a class that defines an animation
        input_.classList.add('error');

        // remove the class after the animation completes
        setTimeout(function () {
            input_.classList.remove('error');
        }, 300);
    }

    document.addEventListener('keydown', function (e) {
        const w = e.key.toUpperCase();
        if ((/^[A-Za-z ]+$/).test(w) && w.length == 1 && attempt.length < 5) {
            attempt += w;
        } else if (w == "BACKSPACE") {
            attempt = attempt.slice(0, -1)
        } else if (w == "ENTER" && attempt.length != 5) {
            shake()
        }
        else if (w == "ENTER") {
            check()
        }

        update()
    }, false)
}