import logo from './assets/logo.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faCircleUser} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {

  return (
    <>
      <header className="header-container-navbar">
        <div className="d-flex search-container ps-2 pe-2 align-items-center">
          <div className='col-md-3'>
            <img src={logo} className="logo"/>
          </div>
          <div className="col-md-6 m-2 align-items-center">
            <div class="input-group">
              <input type="text" className="form-control" placeholder='buscar...' aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary btn-search" type="button" id="button-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
          <div className="col-md-3 row align-items-center">
            <div className='col-md-6'>
              <button className="btn btn-outline-secondary btn-access" type="button" id="button-cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className='ps-1'>Carrito</span> 
              </button>
            </div>
            <div className='col-md-6'>
              <button className="btn btn-outline-secondary btn-access" type="button" id="button-account">
                <FontAwesomeIcon icon={faCircleUser} />
                <span className='ps-1'>Cuenta</span> 
              </button>
            </div>
          </div>
        </div>
        {/* <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
      </header>
    </>
  )
}
