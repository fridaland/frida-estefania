import coverImage from '../assets/cover.png';

export const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="left-nav">
          <a href="/">
            <h1>Frida Estefanía</h1>
          </a>
        </div>
        <div className="right-nav">
          <ul>
            <li>
              <a href={'/codes'}>Tech Hub</a>
            </li>
            <li>
              <a href={'/passion'}>Passion Projects</a>
            </li>
            <li>
              <a href={'/huellitas'}>Huellitas</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="banner-container">
        <img src={coverImage} alt="error"/>
      </div>
    </div>
  );
};