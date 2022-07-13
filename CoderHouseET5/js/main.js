const productos = [
    { id: 101, nombre: "INTERNET 10MB", precio: 1400 },
    { id: 102, nombre: "INTERNET 20MB", precio: 1700 },
    { id: 103, nombre: "INTERNET 30MB", precio: 2000 },
    { id: 104, nombre: "INTERNET 40MB", precio: 2300 },
    { id: 105, nombre: "INTERNET 50MB", precio: 2600 },
    { id: 106, nombre: "INTERNET 60MB", precio: 2900 },
    { id: 107, nombre: "INTERNET 70MB", precio: 3200 },
    { id: 108, nombre: "INTERNET 80MB", precio: 3600 },
    { id: 109, nombre: "INTERNET 90MB", precio: 4000 },
    { id: 110, nombre: "INTERNET 100MB", precio: 4500 },
    { id: 111, nombre: "INTERNET 300MB", precio: 4900 },
    { id: 112, nombre: "INTERNET 500MB", precio: 5300 },
];

let divContainer = document.createElement("div")
document.body.append(divContainer)
divContainer.className = "container-fluid"


let divRow = document.createElement("div")
divRow.className = "row"
document.body.append(divRow)


productos.forEach(producto => {

    let divCol = document.createElement('div');
    let h3 = document.createElement("h3")
    let p = document.createElement("p")
    let input = document.createElement("input")
    input.type = "button"
    input.value = "Comprar"

    h3.innerHTML = producto.nombre;
    p.innerHTML = producto.precio;


    divCol.appendChild(h3)
    divCol.appendChild(p)
    divCol.appendChild(input)
    divCol.className = "col-2"
    divRow.appendChild(divCol)
});

divContainer.appendChild(divRow)
document.body.appendChild(divContainer)

divContainer.style.width= "80%"
divContainer.style.display = "flex"
divContainer.style.alignItems = "center"
divContainer.style.gap ="20px"
divCol.style.paddingBottom = "20px"
p.style.textAling ="center"

