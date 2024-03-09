const productos = [
 {id:1 , nombre:"Fernet", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_625593-MLA74134567488_012024-F.webp",descripcion:"Alcohol", precio:"9500"},
 {id:2 , nombre:"Absolut", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_653243-MLA74218928615_012024-F.webp",descripcion:"Alcohol", precio:"17500"},
 {id:3, nombre:"Gin", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_691277-MLA74139426669_012024-F.webp", descripcion:"Alcohol",precio:"10000"},
 {id:4, nombre:"Campari", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_987838-MLA53300291199_012023-F.webp", descripcion:"Alcohol", precio:"70000"},
 {id:5, nombre:"Ron", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_657424-MLA74218925321_012024-F.webp", descripcion:"Alcohol",precio:"12000"},
 {id:6 , nombre:"Whisky", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_811495-MLA74113010398_012024-F.webp", descripcion:"Alcohol", precio:"25000"},
 {id:7, nombre:"Coca cola", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_663842-MLA53151984915_012023-F.webp",descripcion:"Gaseosa",precio:"2400"},
 {id:8, nombre:"Jugo cepita", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_841533-MLA52981759494_122022-F.webp", descripcion:"Jugo",precio:"1600"},
 {id:9, nombre:"Sprite", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_754202-MLA53024251477_122022-F.webp", descripcion:"Gaseosa", precio:"2400"},
 {id:10, nombre:"Speed", imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_994699-MLA52877016055_122022-F.webp", descripcion:"Energizante",precio:"1300"},
 
]


const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const obtenerProductosLs = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const guardarCarritoLS = (productos) => {
    localStorage.setItem("carrito" ,JSON.stringify(productos));
}


const obtenerCarritoLS = () => {
    return JSON.parse (localStorage.getItem("carrito")) || [];
}


const cantTotalProductos = () =>  {
    const carrito = obtenerCarritoLS();
    
    return carrito.lenght; 
}








function renderProductos (){
          
         const productos= obtenerProductosLs ();


      let contenido="";

      for (const producto of productos) {
        contenido+=`<div class="col-md-4 text-center">
        <img src="${producto.imagen}"alt="${producto.nombre}" height="244"/>
        <p class="colorFuente">${producto.nombre}</p>
        </div>`;
        
      }

    document.getElementById("productos").innerHTML = contenido;


}
 
renderProductos ()