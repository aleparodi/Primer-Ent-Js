class Productos {
    constructor(id, nombre, marca , precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Productos(1, "Film de cocina", "Asner", 100, 60)
const producto2 = new Productos(2, "Cinta de Embalar", "Roed", 50, 25)
const producto3 = new Productos(3, "Papel Alumnio", "Cocinerito", 70, 15)
const producto4 = new Productos(4, "Carton corrugado", "Resistente", 150, 80)
const producto5 = new Productos(5, "Cinta Fragil", "Fragil", 120, 70)

const mercaderia = [producto1, producto2, producto3, producto4, producto5]

mercaderia.forEach((Productos, i) => {
    console.log(i)
    console.log(Productos)
})

const stockGeneral = mercaderia.map( Productos => Productos.stock )

console.log(stockGeneral.reduce((acum, sig) => acum + sig, 0))



