$(document).ready(() => { 
    function verificarAlarmes() {
        var jsonTarefa = window.localStorage.getItem('info');
        var tarefa = JSON.parse(jsonTarefa);
    
        var horas = [];
    
        for (let i = 0; i < tarefa.length; i++) {
            var horaObj = {};
            horaObj.hora = tarefa[i].time  
            horaObj.nome = tarefa[i].nome
            horas.push(horaObj);  
        } 
     
        var agora = new Date();
    
        for (let i = 0; i < horas.length; i++) {
            var horaObjeto = new Date("01/01/2023 " + horas[i].hora);
    
            if (agora.getHours() == horaObjeto.getHours() && agora.getMinutes() == horaObjeto.getMinutes()) {
                document.getElementById('sound').play();
                Swal.fire({
                    title: `${horas[i].nome}`,
                    text: 'Alarme.',
                    imageUrl: '../img/undraw_time_management_re_tk5w.svg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                })
            }        
        }
    }
    
    setInterval(verificarAlarmes, 60000);

})
