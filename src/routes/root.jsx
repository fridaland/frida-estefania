import { NavBar } from '../components/NavBar';
import frida from '../assets/frida.jpeg';
import { MainContainer } from '../components/MainContainer';

export default function Root() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <div className="main-container-center">
          <div className="main-container-info">
            <h4>Welcome! My name is Frida.</h4>
            <h4>
              I'm a queer Mexicana living in the Bay area trying to survive this capitalistic world.
              Alongside being a seasoned coder, I thrive on creative endeavors, nurturing various passion projects.
            </h4>
            <h4>
              If you seek assistance with website development, mobile applications, or simply crave some tech savvy guidance,
              feel free to explore the "Tech Hub" section. I offer competitive services tailored to diverse project needs. 
            </h4>
            <h4>
              For a glimpse into the realm of creative indulgence, venture into the passion projects tab. 
              Discover my ongoing creative pursuits, available artworks, and occasional musings. Your support in any form is immensely appreciated!
            </h4>
            <h4>
              On a heartfelt note, I'm fervently working towards the launch of a nonprofit endeavor named "Huellitas." 
              This initiative is dedicated to safeguarding animals from abuse, neglect, and cruelty. Once fully established, "Huellitas" will operate as a no-kill sanctuary, 
              offering love and rehabilitation to animals in need of refuge. Explore the "Huellitas" section to learn more about our mission and vision.
            </h4>
          </div>
          <div className="main-container-image">
            <div className="avatar">
              <img src={frida} alt="error" />
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
}
  