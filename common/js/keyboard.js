function loadKeyboad() {
    const fr = 'QWERTYUIOP' // UIOPASDFGHJKLZXCVBNM''
    const sr = 'ASDFGHJKL'
    const tr = 'ZXCVBNM'

    const rows = [fr, sr, tr]

    const kb = document.getElementById('keyboard');
    for (let i = 0; i < 3; i++) {
        const rl = rows[i].length
        var inner = ''
        // initiate row and its CLASSES
        inner += `<div class="flex row space-around">`;

        // if its the third row, start with ENTER
        if (i == 2) {
            inner += `<div class="wait actions" id="enter">ENTER</div>`
        }

        for (let j = 0; j < rl; j++) {
            // generate the keys in the row
            let key = rows[i][j];
            inner += `<div class="wait key" id="${key}">${key}</div>`;
        }

        // third row end = ERASE
        if (i == 2) {
            inner += `<div class="wait actions" id="del">ERASE</div>`
        }
        // end the row
        inner += `</div>`;
        kb.innerHTML += inner
    }
}