
const agregarAlCarrito = (frutaId) => { 

    if (frutaId > 0) {
        const valor = productos_data.find(elemento => elemento.id === frutaId) 
        if (valor !== undefined) {

            carritoFrutas.push(valor) 
        
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${valor.imagen} ${valor.nombre} agregado al carrito`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
    
    almacenarCarrito(carritoFrutas) 
    
}


const almacenarCarrito = (carritoFrutas) => { 

    carritoFrutas.length > 0 && localStorage.setItem("carritoFrutas", JSON.stringify(carritoFrutas)) 
    
}

const recuperarCarrito = () => { 
    
    const contenido = localStorage.getItem('carritoFrutas'); 
    const carrito = contenido ? JSON.parse(contenido) : []; 
    
    console.log(contenido ? 'Tiene algo el carrito' : 'La clave no existe o no tiene nada');
    
    return carrito; 
  };

const carritoFrutas = recuperarCarrito() 


console.log(carritoFrutas)



/* 
Lederhos Jeremías Iván 
DNI: 42980758
*/