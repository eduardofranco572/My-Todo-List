$(document).ready(() => {

    let numid = 1;
    let elementos = [];

    if(localStorage.info){   
        let info = localStorage.getItem("info");
        info = JSON.parse(info); 
        elementos = info; 
        elementos.forEach(({id,nome,categoria,time,data,feito}) => {
            criaElemento(id,data,time,nome,categoria);
            if (feito) {
                $(`#teste${id}`).css("display", "flex");
                $(`#feit${id}`).parents(".efeito").css("opacity", "0.3");
                $(`#feit${id}`).parents(".efeito").css("transition", "0.5s"); 
              } 
        });
        
        console.log(elementos.length)
 
        if (elementos.length === 0) {
            localStorage.clear();
        }
       
        numid = elementos[elementos.length - 1].id + 1; 
       
       
    }

    function post(){
        const nome = $("#name").val();
        const categoria = $("#cat").val();
        const time = $("#time").val();
        const data = $("#data"); 

        const info = {
            id: numid,
            nome: nome, 
            categoria: categoria,
            time: time,
            data: data,
            feito: false
        }
        
        elementos.push(info);
        localStorage.setItem("info", JSON.stringify(elementos));
        criaElemento(numid,data,time,nome,categoria);

        numid++;
    }

   
    $("#adicinaPost").click(function() {
        post()
        $("#post").css("display", "none");
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Tarefa Criada'
          })    
        
    });


    function criaElemento(id,data,hora,nome,categoria){
        const lista = `
            <div class="esticont">
                <div class="list">
                    <div class="linhafeito" id="teste${id}"}>
                        <span id="aparece" class="material-symbols-outlined">done</span>
                    </div>
                    <div class="efeito"}>
                        <div class="part1">
                            <div class="hora">
                                <p> Alerta para as ${hora.split(':').join('h ')}min</p>
                            </div>
                            <div class="categoria">
                                <p>${categoria}</p>
                            </div>
                            <div class="nome">
                                <h1>${nome}</h1>
                            </div>
                        </div>
                        <div class="part2">
                            <div class="alinha-p2">
                                <div class="feito" id="feit${id}"}>
                                    <span class="material-symbols-outlined">
                                        check_circle
                                    </span>
                                </div>
                                <div class="delete" id="delet${id}">
                                    <span class="material-symbols-outlined" >
                                        delete
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $('.conteudo').append(lista);

        $(`#delet${id}`).click(function() {
            $(this).parents(".esticont").remove()
            elementos = elementos.filter((elemento) => elemento.id !== id);
            localStorage.setItem("info", JSON.stringify(elementos));
        });

        $(`#feit${id}`).click(function() {
            $(`#teste${id}`).css("display", "flex");
            $(this).css("color", "green");
            $(this).parents(".efeito").css("opacity", "0.3");
            $(this).parents(".efeito").css("transition", "0.5s");
            const infoIndex = elementos.findIndex((elemento) => elemento.id === id);
            elementos[infoIndex].feito = true;
            localStorage.setItem("info", JSON.stringify(elementos));
        });
    }

})
