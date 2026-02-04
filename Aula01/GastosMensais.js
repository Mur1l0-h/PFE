// Ex 2 calculadora de gastos mensais
import {createInterface} from 'readline'

const message = createInterface({
    input: process.stdin,
    output: process.stout
})


function CalcularGastos() {

    console.log("Digite o seu sálario!");
    message.question("Sálario", (salario) => {

        console.log("Digite o aluguel!");
        message.question("Aluguel", (aluguel) => {

            console.log("Digite o gasto da alimentação!");
            message.question("Alimentacao", (alimentacao) => {

                console.log("Digite o gasto do lazer!");
                message.question("Lazer", (lazer) => {

                    let resulta = LogicaGastos(salario, aluguel, alimentacao, lazer)                
                    
                    message.close()
                })

            })

        })

    })
}

function LogicaGastos(salario, aluguel, alimentacao, lazer){

    let conta = salario - aluguel - alimentacao - lazer
    if(conta < 0){
        return console.log("Saldo negativo");
    }else if(conta == 0){
        return console.log("Saldo no limite");
    }else{
        return console.log("Saldo positivo");
    }

}

CalcularGastos()

