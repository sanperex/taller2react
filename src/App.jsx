//import './shared/styles/App.css'
import { useState } from "react"
import { Header } from "./features/layout/components/Header"
import { ProductList } from "./features/layout/components/ProductList"
import { ProductForm } from "./features/layout/components/ProductForm"
import { Footer } from "./features/layout/components/Footer"
import { Props } from "./features/layout/components/Props"


function App() {
  
  const [vista, setVista] = useState("tienda")
  
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">

      <Header setVista={setVista} />

      <div className="container-fluid my-4 flex-grow-1 px-4">

        {vista === "tienda" &&(
          <div className="row">
            <ProductList />
            <ProductForm />
          </div>   
        )}
       {vista === "props" && <Props />}
       
       </div>

      <Footer />

    </div>
  )
}

export default App
