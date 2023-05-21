const actualizar = () => {
    let fecha = new Date();
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();
    let diaSemana = fecha.getDay();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    
    const diaSemanaId = document.getElementById("diaSemanaId");
    const diaId = document.getElementById("diaId");
    const mesId = document.getElementById("mesId");
    const anioId = document.getElementById("anioId");
    const horaId = document.getElementById("horaId");
    const minId = document.getElementById("minId");
    const segId = document.getElementById("segId");
    
    const semana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    diaSemanaId.innerText = semana[diaSemana] + " "

    if(dia < 10){
        diaId.innerText = `0${dia}`
    }
    else{
        diaId.innerText = dia
    }
    if(mes < 10){
        mesId.innerText = `0${mes + 1}`
    }
    else{
        mesId.innerText = mes
    }

    anioId.innerText = anio
    
    if(hora < 10){
        hora = "0" + hora
    }
    
    horaId.innerText = hora
    
    if(min < 10){
        min = "0" + min
    }
    
    minId.innerText = min
    
    if(seg < 10){
        seg = "0" + seg
    }
    segId.innerText = seg
}

const intervalo = setInterval(actualizar, 1000);




