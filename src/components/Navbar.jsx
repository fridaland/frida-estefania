import coverImage from '../assets/cover.png';
import { useLocation } from 'react-router-dom';


export const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          <a href="/">
            <h1>Frida Estefanía</h1>
          </a>
        </div>
        <div className="right-nav">
          <div>
            <a href={'/codes'}>
              <h3 className={location.pathname.includes('/codes') ? 'navbar-active' : ''}>Tech Hub</h3>
            </a>
          </div>
          <div>
            <a href={'/passion'}>
              <h3 className={location.pathname.includes('/passion') ? 'navbar-active' : ''}>Passion Projects</h3>
            </a>
          </div>
          <div>
            <a href={'/huellitas'}>
              <h3 className={location.pathname.includes('/huellitas') ? 'navbar-active' : ''}>Huellitas</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="banner-container">
        <img src={coverImage} alt="error"/>
      </div>
    </>
  );
};