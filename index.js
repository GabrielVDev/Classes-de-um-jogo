class hero{
    contructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    messagePreview()
        if (tipo = "guerreiro"){
            const ataque = "espada"
            console.log(`O ${tipo} atacou usando ${ataque}`)
        } else if (tipo = "mago"){
            ataque = "magia"
            console.log(`O ${tipo} atacou usando ${ataque}`)
        } else if (tipo = "monge"){
            ataque = "magia"
            console.log(`O ${tipo} atacou usando ${ataque}`)
        } else if (tipo = "ninja"){
            ataque = "shuriken"
            console.log(`O ${tipo} atacou usando ${ataque}`)
        }    
}

let mago = new.hero("gabriel", "23", "mago")

mago.messagePreview()