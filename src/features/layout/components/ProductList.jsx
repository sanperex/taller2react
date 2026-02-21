import { ProductCard } from "./cards"

export const ProductList = () => {
  return (
    <div className="col-md-8">
      <div className="card shadow-sm">
        <div className="card-header bg-secondary text-white">
          Productos
        </div>

        <div className="card-body">
          <div className="row">

            <ProductCard 
              imagen="img/wh-ch520_black.webp"
              nombre="Auriculares Bluetooth"
              precio="159.900"
              estado="En stock"
            />

            <ProductCard 
              imagen="img/fizzpro.png"
              nombre="Teclado Mecánico"
              precio="249.000"
              estado="Pocas unidades"
            />

            <ProductCard 
              imagen="img/vipermini.jpg"
              nombre="Mouse alambrico"
              precio="49.900"
              estado="En stock"
            />

            <ProductCard 
              imagen="img/camara.webp"
              nombre="Cámara Compacta"
              precio="1.099.000"
              estado="Agotado"
            />

          </div>
        </div>
      </div>
    </div>
  )
}