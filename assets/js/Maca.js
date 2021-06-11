class Maca extends Tabuleiro {
  constructor(){
    super()
    this.macaX = 15;
    this.macaY = 15;
  }

  
  pintaMaca(pincel){
    pincel.fillStyle = "red";
    pincel.fillRect(this.macaX*this.tamanhoDaPeca, this.macaY*this.tamanhoDaPeca, this.tamanhoDaPeca, this.tamanhoDaPeca);    
  }

  novaMaca(){
      if(this.posicaoX == this.macaX && this.posicaoY == this.macaY){
          this.macaX = Math.floor(Math.random()*this.totalDePecas)
          this.macaY = Math.floor(Math.random()*this.totalDePecas)
          this.cauda ++
      }
  }
}