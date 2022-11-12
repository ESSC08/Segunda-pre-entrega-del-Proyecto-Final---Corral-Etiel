let obj = [
    {id: "1", name: "Producto 1", categoria: "Pokemon", stock: "100", precio: "1000", foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F698972804660135995%2F&psig=AOvVaw3gpTuRPOZYrt44Mz42Bl9n&ust=1668379010441000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCM56PaqfsCFQAAAAAdAAAAABAJ"},
    {id: "2", name: "Producto 2", categoria: "Pokemon", stock: "100", precio: "1000", foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F698972804660135995%2F&psig=AOvVaw3gpTuRPOZYrt44Mz42Bl9n&ust=1668379010441000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCM56PaqfsCFQAAAAAdAAAAABAJ"},
    {id: "3", name: "Producto 3", categoria: "Pokemon", stock: "100", precio: "1000", foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F698972804660135995%2F&psig=AOvVaw3gpTuRPOZYrt44Mz42Bl9n&ust=1668379010441000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCM56PaqfsCFQAAAAAdAAAAABAJ"},
    {id: "4", name: "Producto 4", categoria: "Pokemon", stock: "100", precio: "1000", foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F698972804660135995%2F&psig=AOvVaw3gpTuRPOZYrt44Mz42Bl9n&ust=1668379010441000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCM56PaqfsCFQAAAAAdAAAAABAJ"},
]

export const gFetch = new Promise( (resuelto, rechazado) => {
    resuelto(obj)
})