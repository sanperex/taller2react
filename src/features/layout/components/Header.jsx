export const Header = ({ setVista }) => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow">
      <div className="container-fluid">

        <span className="navbar-brand">
          Mi Proyecto React
        </span>

        <div>
          <button 
            className="btn btn-outline-light me-2"
            onClick={() => setVista("tienda")}
          >
            catalogo
          </button>

          <button 
            className="btn btn-outline-warning"
            onClick={() => setVista("props")}
          >
            Props
          </button>
        </div>

      </div>
    </nav>
  )
}