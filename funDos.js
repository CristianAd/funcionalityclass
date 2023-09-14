export class funDos{
    constructor(){

    }

    nAletorio() {
        return Math.floor(Math.random() * 12) + 1;
      }

    recuperarSumar(){
      

       let indice = 0
       document.getElementById("sumar").addEventListener("click", ()=>{
            const rNumAleatorio = document.getElementById("rNumAleatorio")
            const numeroGenerado = this.nAletorio()
            rNumAleatorio.innerHTML = numeroGenerado
            const itemN =   document.getElementById("contenedorN")
            console.log(itemN.children[indice])

            const valorHtmlPrevio = parseInt(itemN.children[indice].innerHTML)
            itemN.children[indice].innerHTML = valorHtmlPrevio + numeroGenerado

            indice = (indice + 1) % 3

       })
       
    }
}