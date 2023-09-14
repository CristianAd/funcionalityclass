import { funDos } from "./funDos.js"

const items = `
<div>NUMERO ALEATORIO <p id="rNumAleatorio"></p> </div>
<div id="contenedorN">
    <div id="itemN">0</div>
    <div id="itemN">0</div>
    <div id="itemN">0</div>
</div>
<button id="sumar">Sumar</button>
`
const zonaBtn = document.getElementById("zonaBtn")
zonaBtn.innerHTML = items

const funSumar = new funDos()
funSumar.recuperarSumar()


