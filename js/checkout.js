const retornarFila = (producto) => {
    return `
        <tr>
            <td>${producto.imagen} ${producto.nombre}</td>
            <td>x1</td>
            <td>${producto.precio}</td>
            <td><button class="hide" title="esta feature no esta activa aun">borrar</button></td>
        </tr>
`
}

const retornarTablaHTML = () => {
    const tableBody = document.getElementById('table_body')
    let tabla = ''
    carritoFrutas.map(producto => ( 
        tabla += retornarFila(producto)
    ))

    tableBody.innerHTML = tabla
}


carritoFrutas.length > 0 && retornarTablaHTML() 

const hacerCompra = () => {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: '',
          cancelButton: 'btn'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro de comprar este pedido?',
        text: "En 24 hs llegará a tu domicilio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Enviar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Hemos notificado sobre tu pedido!',
            'Recibirás un correo cuando sea despachado',
            'success'
          )
          localStorage.clear();
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 3000);
            
        } else if (
          
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Pedido cancelado',
            'No se ha enviado el pedido',
            'error'
          )
        }
      })
    

    
}
const botonComprar = document.getElementById('btnComprar')
botonComprar.addEventListener('click',()=>{
    hacerCompra()
})
carritoFrutas.length == 0 ? botonComprar.classList.add('hide') : botonComprar.classList.remove('hide')

/* 
Lederhos Jeremías Iván 
DNI: 42980758
*/