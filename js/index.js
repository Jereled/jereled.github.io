
const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('.button') 
    
    if (botonesAgregar != null) { 

        for (const boton of botonesAgregar) {  
            boton.addEventListener('click', (event) => {
                agregarAlCarrito(Number(event.target.id)) 
                
            })
        }

    }

}


const retornarCard = (objeto) => { 
    return `
    <div class="card">
        <div class="card-image">${objeto.imagen}</div> 
        <div class="card-name">${objeto.nombre}</div>
        <div class="card-price">${objeto.precio}</div>
        <div class="card-button">
        <button class="button button-outline button-add" id="${objeto.id}"
            title="Agregar ${objeto.nombre} al carrito">+</button>
        </div>
    </div>
    `
}

const productos_data = []
const url ='https://jereled.github.io/Datos.json'


const obtenerProductos = () => {
   
    
    let divContainer = document.querySelector('.container'); 
    let i = 1 
    let cards = '' 
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach((producto) => {
                producto.id = (i++) 
                cards += retornarCard(producto) 
                
                productos_data.push(producto) 
            })
            divContainer.innerHTML = cards 
            
            activarClickEnBotones() 
        })
        .catch(error => {
            
            console.log('Ha ocurrido un error:', error);
        });
             

}

obtenerProductos()


/* 
Lederhos Jeremías Iván 
DNI: 42980758
*/