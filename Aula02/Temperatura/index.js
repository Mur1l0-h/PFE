function CalcularTemp(){

    let input = document.getElementById("valorUsuario")
    let botao = document.getElementById("botaoCalculo")
    let resposta = document.getElementById("RespostaDoCalculo")
    let main = document.getElementById("MainId")
    
    
    botao.addEventListener("click", ()=>{
        let inputValor = input.value

        if(!inputValor){
            resposta.innerHTML = "Não foi recebido um valor válido!"
            console.log(inputValor);
            console.log("qasdasd");
            return
        }

        let calculo = Math.floor(5/9 * (inputValor + 32));
        resposta.innerHTML = calculo.toString()

        if(calculo > 80){
            main.style.backgroundColor = "#dc461a"
        }else{
            main.style.backgroundColor = "#3076e7"
        }
    })
}

CalcularTemp()