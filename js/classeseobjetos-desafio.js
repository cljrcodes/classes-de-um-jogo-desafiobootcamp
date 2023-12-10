class Heroi {
    constructor(nameHero, ageHero, typeHero) {
        this.nameHero = nameHero;
        this.ageHero = ageHero;
        this.typeHero = typeHero;
    }
    atacar() {
        switch(this.typeHero) {
            case "Guerreiro": {
                console.log(`O herói ${this.nameHero} da classe ${this.typeHero} atacou usando Espada.`)
                break;
            }
            case "Mago": {
                console.log(`O herói ${this.nameHero} da classe ${this.typeHero} atacou usando Magia.`)
                break;
            }
            case "Monge": {
                console.log(`O herói ${this.nameHero} da classe ${this.typeHero} atacou usando Artes Marciais.`)
                break;
            }
            case "Ninja": {
                console.log(`O herói ${this.nameHero} da classe ${this.typeHero} atacou usando Shurikens.`)
                break;
            }
            default:
                console.log('No_Value')
                break;
        }
    }
}

let heroGuerreiro = new Heroi ("Garen", 25, "Guerreiro")
heroGuerreiro.atacar();

let heroMago = new Heroi ("Veigar", 5000, "Mago")
heroMago.atacar();

let heroMonge = new Heroi ("Lee Sin", 50, "Monge")
heroMonge.atacar();

let heroNinja = new Heroi ("Kennen", 35, "Ninja")
heroMago.atacar();