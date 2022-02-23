function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

window.onload = function () {
    loadKeyboad();
    attempt = '';

    // virtual keyboard event listeners
    const keys = document.getElementsByClassName('key');
    const del = document.getElementById('del')
    const enter = document.getElementById('enter')

    // A-Z
    for (let i = 0; i < keys.length; i++) {
        let inn = keys[i].innerHTML;
        keys[i].addEventListener('click', function () {
            attempt += inn;
            update();
        })
    }
    // backspace
    del.addEventListener('click', function () {
        attempt = attempt.slice(0, -1)
        update();
    })

    // enter
    enter.addEventListener('click', function () {
        if (attempt.length == 5 && argWordList.includes(attempt.toLowerCase())) {
            check();
        }
        else {
            shake(currentAttempt);
        }
    })

    // cuenta de letras correctas. por ahora sin usar
    rightLCount = 0

    // genero el juego
    let game = document.getElementById('game')
    for (let i = 0; i < 6; i++) {
        var extra = [0, 1, 4, 5].includes(i) ? 'cielo' : '';

        game.innerHTML +=
            `
        <div class="flex row h-center ${extra}" id="input${i}">
            <div class="flex v-center text var${i} h-center box"></div>
            <div class="flex v-center text var${i} h-center box"></div>
            <div class="flex v-center text var${i} h-center box"></div>
            <div class="flex v-center text var${i} h-center box"></div>
            <div class="flex v-center text var${i} h-center box"></div>
        </div>
        `
    }

    function update() {
        // actualiza las letras de la fila respecitva
        for (let i = 0; i < 5; i++) {
            names[i].innerHTML = attempt[i] == undefined ? ' ' : attempt[i];
        }
    };
    const p = argWordList[Math.floor(Math.random() * argWordList.length)].toUpperCase();

    // en que fila se esta
    currentAttempt = 0
    var names = document.getElementsByClassName('var'.concat(currentAttempt.toString()))

    function check() {
        for (let i = 0; i < 5; i++) {
            const value_ = document.getElementById(names[i].innerHTML).innerHTML[0];

            const el = document.getElementById(value_);

            console.log(el);

            if (p[i] == attempt[i]) {
                names[i].classList.add('right-pos');
                el.classList = "right-pos key"
                rightLCount++;
            }

            else if (p.includes(attempt[i])) {
                names[i].classList.add('wrong-pos');
                el.classList = "wrong-pos key"
            }

            else {
                names[i].classList.add('not-in');
                el.classList = "not-in key"
            }
        }
        currentAttempt++;
        names = document.getElementsByClassName('var'.concat(currentAttempt.toString()))
        attempt = '';

        if (rightLCount == 5) {
            // TODO
        }
    }

    function shake(att) {
        // anima la fila en caso de misinput
        const input_ = document.getElementById('input'.concat(att.toString()))
        // Add a class that defines an animation
        input_.classList.add('error');

        // remove the class after the animation completes
        setTimeout(function () {
            input_.classList.remove('error');
        }, 300);
    }


    document.addEventListener('keydown', function (e) {
        const w = e.key.toUpperCase();
        if ((/^[A-Za-zÑñ]+$/).test(w) && w.length == 1 && attempt.length < 5) {
            attempt += w;
        } else if (w == "BACKSPACE") {
            attempt = attempt.slice(0, -1)
        } else if ((w == "ENTER")) {
            if (attempt.length == 5 && argWordList.includes(attempt.toLowerCase())) {
                check();
            }
            else {
                shake(currentAttempt);
            }
        };

        update();
    }, false)
}
