function calcular(){

    /* Valores referentes ao horario de entrada*/

    var InputInicio = document.querySelector('input#inicio').value
    
    var InputHora = InputInicio.substring(0, 2);
    var InputMinuto = InputInicio.substring(3, 5);

    var HoraInicio = parseInt(InputHora)
    var MinutoInicio = parseInt(InputMinuto)

    var HoraemMinutoINICIO = (HoraInicio*60)

    var TotalMinINICIO = (HoraemMinutoINICIO + MinutoInicio)


  /* Valores referentes ao horario de Saida*/

    var InputFinal = document.querySelector('input#final').value
  
    var InputHora2 = InputFinal.substring(0, 2);
    var InputMinuto2 = InputFinal.substring(3, 5);

    var HoraFinal = parseInt(InputHora2)
    var MinutoFinal = parseInt(InputMinuto2)

    var HoraemMinutoFINAL = (HoraFinal*60)

    var TotalMinFINAL = (HoraemMinutoFINAL + MinutoFinal)

    /* Valores referentes ao calculo total de horas*/

    var soma = (TotalMinFINAL - TotalMinINICIO)

    if(soma<=30){
        var resultado = document.getElementById('resultado')
        resultado.innerHTML= ("Total a pagar: " + 4)
    }

    else{

    var UnidadeDivida = (soma/15)

    /*O math.ceil vai arredondar para o inteiro maior , exemplo: se for 2,3 vai arredondar para para 3*/


    var ArrendodarUniDivida = Math.ceil(UnidadeDivida)


    var totalApagar = (ArrendodarUniDivida*2)

     /* Resultado Final*/

     var resultado = document.getElementById('resultado')

     resultado.innerHTML= ("Total a pagar: " + totalApagar)
    
}

}

/*Só funciona com horario de saida ate 00:00, se entrar e sair apos meia noite vai dar erro, porque no calculo é feito a partir da diferença do horario final menos o inicial , nessa situação daria um valor negativo.*/


