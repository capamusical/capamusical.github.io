document.getElementById('sub-nota').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        generarSub();
    }
});

document.getElementById('dom-nota').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        generarDom();
    }
});

document.getElementById('ton-nota').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        generarTon();
    }
});

function normalizarNota(nota) {
    return nota.charAt(0).toUpperCase() + nota.slice(1).toLowerCase();
}

const subNotas = [
    ["Do", "Re", "Mi", "Fa", "Sol", "La"],
    ["Re#", "Fa#", "Sol#", "La#", "Si", "Mib", "Solb", "Lab", "Sib"],
    ["Do#"]
];

const subAcordes = [
    ["F", "F6", "F69", "C/F", "Fmaj7", "Fmaj9", "Dsus4/F", "D7sus4/F", "Dm", "DmAdd9", "Dm7", "Dm9", "Dm11", "Csus4/F", "Csus2/F", "A7sus4/F"],
    ["D7", "G7", "F7", "B7", "D7b9", "D7#9", "D7#11", "D7b13", "D#dism/D", "Ebdism/D", "F#7b5", "C5b", "Ebm6", "Fm6", "G#m7/D", "G#m6/D", "F#m7b5", "Am6/D", "Bb7/D", "Bbsus4/D", "B7b5/D"],
    ["A7", "C#dism"]
];

function generarSub() {
    const notaElegida = document.getElementById('sub-nota').value;
    const notaNormalizada = normalizarNota(notaElegida);
    let indiceNota = -1;

    for (let i = 0; i < subNotas.length; i++) {
        if (subNotas[i].includes(notaNormalizada)) {
            indiceNota = i;
            break;
        }
    }

    if (indiceNota === -1) {
        document.getElementById('sub-result').innerText = "Nota no válida";
        actualizarResumen();
        return;
    }

    const acordeElegido = subAcordes[indiceNota][Math.floor(Math.random() * subAcordes[indiceNota].length)];
    document.getElementById('sub-result').innerText = `Nota Sub: ${notaNormalizada}, Acorde Sub: ${acordeElegido}`;
    actualizarResumen();
}

const domNotas = [
    ["Sol", "La", "Si", "Re", "Mi", "Fa"],
    ["Sol#", "La#", "Do#", "Re#", "Sib", "Lab", "Solb", "Mib", "Reb", "Fa", "Si"],
    ["Fa#", "Do"]
];

const domAcordes = [
    ["G7", "G9", "G13", "Bbmaj7/G", "Fmaj7b5/G", "E7/G"],
    ["G7b9", "G7#9", "G7b5", "G7b5", "G7#11", "G7b13", "Fdism", "Galt", "G#m6", "Db7", "Db7b9", "Db7#9", "B7/G", "D7/G", "A7/G", "E7/G", "Ebsus4/G", "Absus4/G", "Gaug", "Aaug/G", "Daug/G", "Faug/G"],
    ["D7", "F#7b5", "D7b5", "F#dism", "Adism", "Cdism", "Ebdism"]
];

function generarDom() {
    const notaElegida = document.getElementById('dom-nota').value;
    const notaNormalizada = normalizarNota(notaElegida);
    let indiceNota = -1;

    for (let i = 0; i < domNotas.length; i++) {
        if (domNotas[i].includes(notaNormalizada)) {
            indiceNota = i;
            break;
        }
    }

    if (indiceNota === -1) {
        document.getElementById('dom-result').innerText = "Nota no válida";
        actualizarResumen();
        return;
    }

    const acordeElegido = domAcordes[indiceNota][Math.floor(Math.random() * domAcordes[indiceNota].length)];
    document.getElementById('dom-result').innerText = `Nota Dom: ${notaNormalizada}, Acorde Dom: ${acordeElegido}`;
    actualizarResumen();
}

const tonicaNotas = [
    ["Do", "Re", "Mi", "Sol", "La", "Si"],
    ["Do#", "Re#", "Fa#", "Sol#", "La#", "Reb", "Mib", "Solb", "Lab", "Sib"],
    ["Fa"]
];

const tonicaAcordes = [
    ["C", "C6", "C69", "G/C", "Cmaj7", "Cmaj9", "Asus4/C", "A7sus4/C", "Am", "AmAdd9", "Am7", "Am9", "Am11", "Gsus4/C", "Gsus2/C", "E7sus4/C"],
    ["C7", "F7", "Eb7", "A7", "C7b9", "C7#9", "C7#11", "C7b13", "C#dism/C", "D#dism/C", "E7b5", "Bb5b", "Dbm6", "Ebm6", "F#m7/C", "F#m6/C", "Em7b5", "Gm6/C", "Ab7/C", "Absus4/C", "A7b5/C"],
    ["Csus4", "Cmaj7sus4", "C11"]
];

function generarTon() {
    const notaElegida = document.getElementById('ton-nota').value;
    const notaNormalizada = normalizarNota(notaElegida);
    let indiceNota = -1;

    for (let i = 0; i < tonicaNotas.length; i++) {
        if (tonicaNotas[i].includes(notaNormalizada)) {
            indiceNota = i;
            break;
        }
    }

    if (indiceNota === -1) {
        document.getElementById('ton-result').innerText = "Nota no válida";
        actualizarResumen();
        return;
    }

    const acordeElegido = tonicaAcordes[indiceNota][Math.floor(Math.random() * tonicaAcordes[indiceNota].length)];
    document.getElementById('ton-result').innerText = `Nota Ton: ${notaNormalizada}, Acorde Ton: ${acordeElegido}`;
    actualizarResumen();
}

function actualizarResumen() {
    const subResultado = document.getElementById('sub-result').innerText;
    const domResultado = document.getElementById('dom-result').innerText;
    const tonResultado = document.getElementById('ton-result').innerText;

    const resumen = `
        Resumen:
        ${subResultado}
        ${domResultado}
        ${tonResultado}
    `;

    document.getElementById('summary').innerText = resumen;

function actualizarResumen() {
    const subResultado = document.getElementById('sub-result').innerText;
    const domResultado = document.getElementById('dom-result').innerText;
    const tonResultado = document.getElementById('ton-result').innerText;

    const resumen = `
        Resumen:
        ${subResultado}
        ${domResultado}
        ${tonResultado}
    `;

    document.getElementById('summary').innerText = resumen;
}

function generarSub() {
    const notaElegida = document.getElementById('sub-nota').value;
    const notaNormalizada = normalizarNota(notaElegida);
    let indiceNota = -1;

    for (let i = 0; i < subNotas.length; i++) {
        if (subNotas[i].includes(notaNormalizada)) {
            indiceNota = i;
            break;
        }
    }

    if (indiceNota === -1) {
        document.getElementById('sub-result').innerText = "Nota no válida";
        actualizarResumen();
        return;
    }

    const acordeElegido = subAcordes[indiceNota][Math.floor(Math.random() * subAcordes[indiceNota].length)];
    document.getElementById('sub-result').innerText = `Nota Sub: ${notaNormalizada}, Acorde Sub: ${acordeElegido}`;
    actualizarResumen();
}

function generarDom() {
    const notaElegida = document.getElementById('dom-nota').value;
    const notaNormalizada = normalizarNota(notaElegida);
    let indiceNota = -1;

    for (let i = 0; i < domNotas.length; i++) {
        if (domNotas[i].includes(notaNormalizada)) {
            indiceNota = i;
            break;
        }
    }

    if (indiceNota === -1) {
        document.getElementById('dom-result').innerText = "Nota no válida";
        actualizarResumen();
        return;
    }

    const acordeElegido = domAcordes[indiceNota][Math.floor(Math.random() * domAcordes[indiceNota].length)];
    document.getElementById('dom-result').innerText = `Nota Dom: ${notaNormalizada}, Acorde Dom: ${acordeElegido}`;
    actualizarResumen();
}

function generarTon() {
    const notaElegida = document.getElementById('ton-nota').value;
    const notaNormalizada = normalizarNota(notaElegida);
    let indiceNota = -1;

    for (let i = 0; i < tonicaNotas.length; i++) {
        if (tonicaNotas[i].includes(notaNormalizada)) {
            indiceNota = i;
            break;
        }
    }

    if (indiceNota === -1) {
        document.getElementById('ton-result').innerText = "Nota no válida";
        actualizarResumen();
        return;
    }

    const acordeElegido = tonicaAcordes[indiceNota][Math.floor(Math.random() * tonicaAcordes[indiceNota].length)];
    document.getElementById('ton-result').innerText = `Nota Ton: ${notaNormalizada}, Acorde Ton: ${acordeElegido}`;
    actualizarResumen();
}

function normalizarNota(nota) {
    return nota.charAt(0).toUpperCase() + nota.slice(1).toLowerCase();
}

}
