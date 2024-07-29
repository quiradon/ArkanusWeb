console.log('animação')
//id = animated-landing-text

//faça uma animação para o texto como uma maquina de escrever que escreve e apaga alternando entre as palavras "Soluções" e "Projetos" a cada 2 segundos

const text = document.getElementById('animated-landing-text');
let i = 0;
let words = ['Soluções', 'Jogos', 'Projetos', 'Automações'];
let word = words[i];
let j = 0;
let writing = true;
let cursorVisible = true;
let erasing = false;

let interval = setInterval(() => {
    if (writing) {
        if (j < word.length) {
            text.innerHTML = word.substring(0, j + 1) + (cursorVisible ? '|' : '');
            j++;
        } else {
            if (cursorVisible) {
                text.innerHTML = word + '|'; // Garante que o cursor permaneça visível no final antes de apagar
            }
            writing = false;
            // Inicia a fase de apagamento após uma pausa
            setTimeout(() => {
                erasing = true;
            }, 2000);
        }
    } else if (erasing) {
        if (text.innerHTML.length > 0) {
            // Remove um caractere por vez
            text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
        } else {
            erasing = false;
            writing = true;
            i = (i + 1) % words.length;
            word = words[i];
            j = 0;
        }
    }
    // Toggle cursor visibility
    cursorVisible = !cursorVisible;
}, 100);

// Para garantir que o cursor pisque mesmo quando não estiver escrevendo
setInterval(() => {
    if (!writing && !erasing) {
        text.innerHTML = word + (cursorVisible ? '|' : '');
        cursorVisible = !cursorVisible;
    }
}, 500);
