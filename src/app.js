import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const btnActualizar= document.getElementById("btnActualizar");
const valorCentral = ['A',2,3,4,5,6,7,8,9,'J','Q','K'];
const simbolo= [1,2,3,4];
const valorCentralAleatorioHtml= document.getElementById("valorCentro");
const simboloHtmlS= document.getElementById("imagenSimboloS");
const simboloHtmlI= document.getElementById("imagenSimboloI");

const action =(e) =>{
  const valorCentralAleatorio = Math.floor(Math.random() * valorCentral.length);

    valorCentralAleatorioHtml.innerHTML= valorCentral[valorCentralAleatorio];
    const simboloAleatorio = Math.floor(Math.random() * simbolo.length);
    
    if(simbolo[simboloAleatorio]==1){
      simboloHtmlS.innerHTML= "♦";
      simboloHtmlS.style.color="red"
      simboloHtmlI.innerHTML= "♦";
      simboloHtmlI.style.color="red"
    } else if (simbolo[simboloAleatorio]==2){
      simboloHtmlS.innerHTML= "♥";
      simboloHtmlS.style.color="red"
      simboloHtmlI.innerHTML= "♥";
      simboloHtmlI.style.color="red"
    } else if (simbolo[simboloAleatorio]==3){
      simboloHtmlS.innerHTML= "♠";
      simboloHtmlS.style.color="black";
      simboloHtmlI.innerHTML= "♠";
      simboloHtmlI.style.color="black";
    } else{
      simboloHtmlS.innerHTML= "♣";
      simboloHtmlS.style.color="black";
      simboloHtmlI.innerHTML= "♣";
      simboloHtmlI.style.color="black";
    } 
}

window.onload = function() {action()}
btnActualizar.addEventListener('click',action )
