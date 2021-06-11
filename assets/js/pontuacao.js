const $pontuacao = document.querySelector(".pontuacao-js")

function pontuacao(){
  if (snake.cauda == 5) { 
    $pontuacao.innerHTML = `<h3>Pontuação: 0`
  } else if (snake.cauda == 6){
    $pontuacao.innerHTML = `<h3>Pontuação: 1 ponto`
  } else if (snake.cauda > 6){
    $pontuacao.innerHTML = `<h3>Pontuação: ${snake.cauda - 5} pontos`
  } 
}

