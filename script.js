var textInput = document.querySelector('#input__texto');
var texOutPut = document.querySelector('#output');

function criptografar(){
    var texto = textInput.value; 

    var resultCripto = texto.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    texOutPut.innerHTML = '<textarea readonly id="input__texto">'+ resultCripto + '</textarea>'; 
}

function descriptografar() {
    var texto = textInput.value; 
    var vogais = { 'ufat': 'u', 'ober': 'o', 'imes': 'i', 'enter': 'e', 'ai': 'a' }; // Ordem invertida
    var resultDescripto = texto;
    for (var vogal in vogais) {
        resultDescripto = resultDescripto.replace(new RegExp(vogal, 'g'), vogais[vogal]);
    }
    texOutPut.innerHTML = '<textarea readonly id="input__texto">'+ resultDescripto + '</textarea>';
}

function copiar() {
    var textoCopia = document.getElementById('output').querySelector('textarea'); // Seleciona o textarea dentro do output
    textoCopia.focus(); // Define o foco no elemento
    textoCopia.setSelectionRange(0, textoCopia.value.length); // Seleciona todo o texto
    document.execCommand('copy'); // Copia o texto selecionado
    alert('Seu texto foi Copiado');
}
    
