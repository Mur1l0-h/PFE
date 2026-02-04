// Ex 3 Formatador de nomes para agenda

import {createInterface} from 'readline'

const message = createInterface({
    input: process.stdin,
    output: process.stout
})

console.log("Digite o seu nome!");
    message.question( "Nome", (nome) => {
        
        limparNomeContato(nome)
        message.close()
    })

function limparNomeContato(nome){

    
    let nomeFormatado = nome.toUpperCase().trim()
    let contarPalavras = nomeFormatado.split(" ").length
    console.log("Nome sem espaços: " + nomeFormatado);
    console.log("Quantidade de palavras: " + contarPalavras);
       
}