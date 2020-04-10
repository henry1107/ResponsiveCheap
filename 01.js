//Construccion de clases
class Usuario{
    constructor(nombre, id)
    {
        this.nombre= nombre;
        this.id = id;

    }
    ingresar(){
        return `Verificando Usuario ${this.nombre}`

    }
}

class Conductores extends Usuario{
    validar(){
        return `valirdar usuario`
    }
}


const Usuario1 = new Usuario('Henry','1');
const vUsuario1=new Conductores('Alexander','2')
console.log(Usuario1.ingresar());
console.log