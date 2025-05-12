class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque
        if (this.tipo == "mago"){
            ataque = "magia"
        } 
        else if (this.tipo == "guerreiro"){
            ataque = "espada"
        }
        else if (this.tipo == "monge"){
            ataque = "artes marciais"
        }
        else if (this.tipo == "ninja"){
            ataque = "shuriken"
        }
        else {
            ataque = "a mão"
        }
        return `O heroi ${this.nome} do tipo ${this.tipo} atacou usando ${ataque}`
    }
}

let heroi1 = new heroi("Gandalf", 1000, "mago")
let heroi2 = new heroi("Aragorn", 87, "guerreiro")
let heroi3 = new heroi("Goku", 40, "monge")
let heroi4 = new heroi("Naruto", 17, "ninja")
let heroi5 = new heroi("Luffy", 19, "pirata")

console.log(heroi1.atacar())
console.log(heroi2.atacar())
console.log(heroi3.atacar())
console.log(heroi4.atacar())
console.log(heroi5.atacar())
