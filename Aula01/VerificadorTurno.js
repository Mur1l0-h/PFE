// Ex 1 verificador de turno
const {createInterface} = await import('readline')

const message = createInterface({
    input: process.stdin,
    output: process.stout
})

async function PerguntarQuestao (){
    
 

    console.log("Digite a hora desejada!\n 1 - Manhã \n 2 - Tarde \n 3 - Noite");
    message.question( "Horario", (horario) => {
        
        console.log("Digite a prioridade da tarefa! (0 a 10)");
        message.question("Prioridade", (prioridade) =>{
            
           let resultado = LogicaResposta(horario, prioridade)
            console.log(resultado);
            
            message.close()
            
        })
    
    })
}

function LogicaResposta(horario, prioridade){
    let horarioResult;
    switch(horario){
        case 1: 
        horarioResult = HoraDia.Manha
        break;
        case 2: 
         horarioResult = HoraDia.Tarde
        break;
        case 3: 
         horarioResult = HoraDia.Noite
        break;
    }


    if(horarioResult == "Manhã" || horarioResult == "Tarde" && prioridade >= 8){
        return "Tarefa crítica!"
    }else if(horarioResult == "Manhã" ||  horarioResult == "Tarde" && prioridade >= 7 || prioridade < 9){
        return "Tarefa importante!"
    }else if(prioridade < 0 || prioridade > 10){
        return "Prioridade inválida!"
    }else{
        return "Tarefa não importante!"
    }
}

const HoraDia ={
    Manha : "Manhã",
    Tarde: "Tarde",
    Noite : "Noite"
}
Object.freeze(HoraDia)

PerguntarQuestao()



