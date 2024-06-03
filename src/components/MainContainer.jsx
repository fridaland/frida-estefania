import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import coffee from '../assets/coffee.png';

export const MainContainer = ({children, color}) => {
  return ( 
    <div className='main-container' style={{backgroundColor: color}}>
      {children}
      <div className='main-container-footer'>
        <a href='https://buymeacoffee.com/fridaland' target="_blank" rel="noopener noreferrer"><img src={coffee} height={60} alt='coffee' /></a>
        <a href='https://www.instagram.com/la___frida/' target="_blank" rel="noopener noreferrer"><img src={instagram} height={40} alt='instagram' /></a>
        <a href='https://www.linkedin.com/in/frida-casas-she-her-they/' target="_blank" rel="noopener noreferrer"><img src={linkedin} height={50} alt='linkedin' /></a>
      </div>
    </div>
  ) 
}