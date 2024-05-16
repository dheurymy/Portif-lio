//Exibe mensagem de identificacao nos itens da aba projeto.

let mensagem1 = document.querySelector(".mensagem1");
let mensagem2 = document.querySelector(".mensagem2");
let mensagem3 = document.querySelector(".mensagem3");
let mensagem4 = document.querySelector(".mensagem4");

// mostra a mensagem
function mostrarMensagem(elemento){   
   elemento.style.display = "flex";   
 }
 
// esconde a mensagem
function esconderMensagem(elemento){
  elemento.style.display = "none"; 
}