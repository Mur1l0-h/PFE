// Ex 1 verificador de turno
import {createInterface} from 'readline'

const message = createInterface({
    input: process.stdin,
    output: process.stout
})

// async function PerguntarQuestao (){



//     console.log("Digite a hora desejada!\n 1 - Manhã \n 2 - Tarde \n 3 - Noite");
//     message.question( "Horario", (horario) => {

//         console.log("Digite a prioridade da tarefa! (0 a 10)");
//         message.question("Prioridade", (prioridade) =>{

//            let resultado = LogicaResposta(horario, prioridade)
//             console.log(resultado);

//             message.close()

//         })

//     })
// }

// function LogicaResposta(horario, prioridade){
//     let horarioResult;
//     switch(horario){
//         case 1: 
//         horarioResult = HoraDia.Manha
//         break;
//         case 2: 
//          horarioResult = HoraDia.Tarde
//         break;
//         case 3: 
//          horarioResult = HoraDia.Noite
//         break;
//     }


//     if(horarioResult == "Manhã" || horarioResult == "Tarde" && prioridade >= 8){
//         return "Tarefa crítica!"
//     }else if(horarioResult == "Manhã" ||  horarioResult == "Tarde" && prioridade >= 7 || prioridade < 9){
//         return "Tarefa importante!"
//     }else if(prioridade < 0 || prioridade > 10){
//         return "Prioridade inválida!"
//     }else{
//         return "Tarefa não importante!"
//     }
// }

// const HoraDia ={
//     Manha : "Manhã",
//     Tarde: "Tarde",
//     Noite : "Noite"
// }
// Object.freeze(HoraDia)

// PerguntarQuestao()



// Ex 2 calculadora de gastos mensais

// function CalcularGastos() {

//     console.log("Digite o seu sálario!");
//     message.question("Sálario", (salario) => {

//         console.log("Digite o aluguel!");
//         message.question("Aluguel", (aluguel) => {

//             console.log("Digite o gasto da alimentação!");
//             message.question("Alimentacao", (alimentacao) => {

//                 console.log("Digite o gasto do lazer!");
//                 message.question("Lazer", (lazer) => {

//                     let resulta = LogicaGastos(salario, aluguel, alimentacao, lazer)                
                    
//                     message.close()
//                 })

//             })

//         })

//     })
// }

// function LogicaGastos(salario, aluguel, alimentacao, lazer){

//     let conta = salario - aluguel - alimentacao - lazer
//     if(conta < 0){
//         return console.log("Saldo negativo");
//     }else if(conta == 0){
//         return console.log("Saldo no limite");
//     }else{
//         return console.log("Saldo positivo");
//     }

// }

// CalcularGastos()


// Ex 3 Formatador de nomes para agenda

// console.log("Digite o seu nome!");
//     message.question( "Nome", (nome) => {
        
//         limparNomeContato(nome)
//         message.close()
//     })

// function limparNomeContato(nome){

    
//     let nomeFormatado = nome.toUpperCase().trim()
//     let contarPalavras = nomeFormatado.split(" ").length
//     console.log("Nome sem espaços: " + nomeFormatado);
//     console.log("Quantidade de palavras: " + contarPalavras);
       
// }

// function CalcularTempoCompromisso(diaRecebido){
//     const milisec = 1000 * 60 * 60 * 24;
    
//     let DiaDeHoje = new Date().getTime();
    
    
//     let DiaRecebido = new Date(diaRecebido).getTime(); // YYYY-MM-DD
    
//     let diff_ms = Math.abs(DiaRecebido - DiaDeHoje);
    
//     let converter_ms = Math.floor(diff_ms / milisec);
    
//     console.log(`A diferença de dia(s) é ${converter_ms} dia(s)`);
    
    
//     // let valor = DataHojeFormatada - DataUsuarioFormatada
//     // console.log(valor);
    

// }

// CalcularTempoCompromisso("10/11/2047")


// Ex 5 Varredura de compromissos 

function Varredura(){

    const arrHoras = [8, 12, 25, 15, -2, 20];

    for (var horarios of arrHoras){
        if(horarios > 23 || horarios < 0){
            console.log("Horário inválido! " + `${horarios}h`);
            
        }else{
            console.log("Horário agendado! " + `${horarios}h`);
        }
    }
}

Varredura()