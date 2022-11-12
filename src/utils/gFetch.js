let obj = [
    {id: "1", name: "Producto 1", categoria: "Pokemon", stock: "100", precio: "1000", foto: "https://imagenpng.com/wp-content/uploads/2015/03/Imagen-Lapiz-PNG-DIbujo-1.png"},
    {id: "2", name: "Producto 2", categoria: "Pokemon", stock: "100", precio: "1000", foto: "https://imagenpng.com/wp-content/uploads/2015/03/Imagen-Lapiz-PNG-DIbujo-1.png"},
    {id: "3", name: "Producto 3", categoria: "Pokemon", stock: "100", precio: "1000", foto: "https://imagenpng.com/wp-content/uploads/2015/03/Imagen-Lapiz-PNG-DIbujo-1.png"},
    {id: "4", name: "Producto 4", categoria: "Pokemon", stock: "100", precio: "1000", foto: "https://imagenpng.com/wp-content/uploads/2015/03/Imagen-Lapiz-PNG-DIbujo-1.png"},
]

export const gFetch = new Promise( (resuelto, rechazado) => {
    resuelto(obj)
})