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