// Classe genérica que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
heroi1.atacar();

const heroi2 = new Heroi("Merlin", 150, "mago");
heroi2.atacar();

const heroi3 = new Heroi("Lee", 40, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Hanzo", 28, "ninja");
heroi4.atacar();

