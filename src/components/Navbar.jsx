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
          <div>
            <a href={'/codes'}><h3>Tech Hub</h3></a>
          </div>
          <div>
            <a href={'/passion'}><h3>Passion Projects</h3></a>
          </div>
          <div>
            <a href={'/huellitas'}><h3>Huellitas</h3></a>
          </div>
        </div>
      </div>
      <div className="banner-container">
        <img src={coverImage} alt="error"/>
      </div>
    </div>
  );
};