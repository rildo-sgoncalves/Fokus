const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const timer = document.querySelector('#timer');
const appImage = document.querySelector('.app__image');
const appTitle = document.querySelector('.app__title');
const startOrPauseBt = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const iniciarOuPausarImg = document.querySelector('#start-pause img');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const playAudio = new Audio('/sons/play.wav');
const pauseAudio = new Audio('/sons/pause.mp3');
const beepAudio = new Audio('/sons/beep.mp3');
const tempoNaTela = document.querySelector('#timer');
let temporizadorFoco = 1500;
let temporizadorCurto = 300;
let temporizadorLongo = 900;

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musica.loop = true;

// const modoButton = document.querySelector('.app__card-button');

function alterarContexto(contexto) {
    mostrarTempo();
    html.setAttribute('data-contexto', contexto);
    appImage.setAttribute('src', `/imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;

        default:
            break;
    }

    botoes.forEach(contexto => {
        contexto.classList.remove('active');
    });

}


// focoBt.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'foco');
//     appImage.setAttribute('src', '/imagens/foco.png')
// });

// curtoBt.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'descanso-curto');
//     appImage.setAttribute('src', '/imagens/descanso-curto.png')
// });

// longoBt.addEventListener('click', () => {
//     html.setAttribute('data-contexto', 'descanso-longo');
//     appImage.setAttribute('src', '/imagens/descanso-longo.png')
// });

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = temporizadorFoco;
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = temporizadorCurto;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = temporizadorLongo;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

startOrPauseBt.addEventListener('click', iniciarOuPausar);


const contagemRegressiva = () => {

    if (tempoDecorridoEmSegundos == 0) {
        beepAudio.play();
        iniciarOuPausarBt.innerHTML = `Começar`;
        iniciarOuPausarImg.setAttribute('src', 'imagens/play_arrow.png');
        alert('Tempo finalizado!');
        zerar();
        return;
    };
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
};

function iniciarOuPausar() {
    if (iniciarOuPausarBt.innerHTML == `Começar`) {
        iniciarOuPausarBt.innerHTML = `Pausar`;
        iniciarOuPausarImg.setAttribute('src', '/imagens/pause.png');
    } else {
        iniciarOuPausarBt.innerHTML = `Começar`;
        iniciarOuPausarImg.setAttribute('src', '/imagens/play_arrow.png');
    }
    if (intervaloId) {
        zerar();
        pauseAudio.play();
        return;
    };
    intervaloId = setInterval(contagemRegressiva, 1000);
    playAudio.play();
};

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
};

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();