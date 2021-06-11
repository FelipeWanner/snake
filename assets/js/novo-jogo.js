const snake = new Snake();
const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

window.onload = function () {
  setInterval(jogo, 100);
  snake.comandos();
  console.log("pagina carregada!")    
}

function jogo() {
  snake.movimento();

  pincel.fillStyle = "black";
  pincel.fillRect(0, 0, tela.width, tela.height);  
  snake.pintaMaca(pincel);
  snake.pintaCobra(pincel);
  snake.novaMaca()
}