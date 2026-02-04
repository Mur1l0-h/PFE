// Ex 4 Calcular tempo

import {createInterface} from 'readline'

const message = createInterface({
    input: process.stdin,
    output: process.stout
})


function CalcularTempoCompromisso(diaRecebido){
    const milisec = 1000 * 60 * 60 * 24;
    
    let DiaDeHoje = new Date().getTime();
    
    
    let DiaRecebido = new Date(diaRecebido).getTime(); // YYYY-MM-DD
    
    let diff_ms = Math.abs(DiaRecebido - DiaDeHoje);
    
    let converter_ms = Math.floor(diff_ms / milisec);
    
    console.log(`A diferença de dia(s) é ${converter_ms} dia(s)`);

}

CalcularTempoCompromisso("10/11/2047")

