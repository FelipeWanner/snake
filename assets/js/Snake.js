class Snake extends Maca {
    constructor() {
        super();
        this.posicaoX = 10;
        this.posicaoY = 10;
        this.velocidade = 1;
        this.velocidadeY = this.velocidade;
        this.velocidadeX = 0;

        this.tamanhoCauda = [];
        this.cauda = 5;
    }
    
    comandos() { 
        /* aqui, tive que usar uma arrow function, pois uma function
        não teria um escopo global, e não conseguiria acessar os this da
        classe, PÓREM, uma ARROW FUNCTION tem um escopo lexico, ou seja, 
        global, e dessa forma, consigo acessar os this dentro da function do
        eventListener */
        
        document.addEventListener("keydown",(evento) =>{
            // a cobra nunca pode voltar contra si mesma, e os "if" desta funcao testam isso
            // a condicao para o "switch" acontecer, é que a cobra não esteja indo na direção oposta do switch.
            if (this.velocidadeX != this.velocidade){
                switch (evento.code) {
                    case "KeyA":
                    case "ArrowLeft":
                        this.velocidadeX = -this.velocidade;
                        this.velocidadeY = 0;
                        break
                }
            }

            if(this.velocidadeY != this.velocidade){
                switch (evento.code){
                    case "KeyW":
                    case "ArrowUp":
                        this.velocidadeX = 0;
                        this.velocidadeY = -this.velocidade;
                        break
                }
            }
            
            if (this.velocidadeX != -this.velocidade){
                switch (evento.code) {
                case "KeyD":
                case "ArrowRight":
                    this.velocidadeX = this.velocidade;
                    this.velocidadeY = 0;
                    break
                }
            }
            if(this.velocidadeY != -this.velocidade){
                switch (evento.code) {
                    case "KeyS":
                    case "ArrowDown":
                        this.velocidadeX = 0;
                        this.velocidadeY = this.velocidade;
                        break
                }
            }
        });
    }

    movimento() {
        this.posicaoX += this.velocidadeX;
        this.posicaoY += this.velocidadeY;
        if (this.posicaoX < 0) {
            this.posicaoX = this.totalDePecas - 1;
        }
        if (this.posicaoX > this.totalDePecas - 1) {
            this.posicaoX = 0;
        }
        if (this.posicaoY < 0) {
            this.posicaoY = this.totalDePecas - 1;
        }
        if (this.posicaoY > this.totalDePecas - 1) {
            this.posicaoY = 0;
        }
    }

    pintaCobra(pincel) {
        pincel.fillStyle = "gray";
        for (let i = 0; i < this.tamanhoCauda.length; i++) {
            pincel.fillRect(
                this.tamanhoCauda[i].X * this.tamanhoDaPeca,
                this.tamanhoCauda[i].Y * this.tamanhoDaPeca,
                this.tamanhoDaPeca,
                this.tamanhoDaPeca
            );
        }
        this.gameOver()

        this.tamanhoCauda.push({ X: this.posicaoX, Y: this.posicaoY });
        while (this.tamanhoCauda.length > this.cauda) {
            this.tamanhoCauda.shift();
        }
    }

    gameOver(){
        for(let i = 0; i<this.tamanhoCauda.length; i++){
            if(this.tamanhoCauda[i].X == this.posicaoX && this.tamanhoCauda[i].Y == this.posicaoY){
                this.velocidadeX = this.velocidadeY = 0;
                this.cauda = 0
                //new Snake()
                console.log("aiaia")
            }
        }
    }
}