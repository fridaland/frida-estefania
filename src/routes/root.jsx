import { NavBar } from '../components/Navbar';

export default function Root() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <p>Welcome! My name is Frida.</p>
        <p>
            I'm a queer Mexicana living in the Bay area trying to survive this capitalistic world.
            Alongside my role as a seasoned engineer, I thrive on creative endeavors, nurturing various passion projects.
        </p>
        <p>
            If you seek assistance with website development, mobile applications, or simply crave some tech savvy guidance,
            feel free to explore the "Tech Hub" section. With six years of experience in coding and technical consultation, 
            I offer competitive services tailored to diverse project needs. Dive into my portfolio showcasing past projects,
            delve into technical blog insights, and easily inquire about your current project.
        </p>
        <p>
            For a glimpse into the realm of creative indulgence, venture into the passion projects tab. 
            Discover my ongoing creative pursuits, available artworks, and occasional musings. Your support in any form is immensely appreciated!
        </p>
        <p>
            On a heartfelt note, I'm fervently working towards the launch of a nonprofit endeavor named "Huellitas." 
            This initiative is dedicated to safeguarding animals from abuse, neglect, and cruelty. Once fully established, "Huellitas" will operate as a no-kill sanctuary, 
            offering love and rehabilitation to animals in need of refuge. Explore the "Huellitas" section to learn more about our mission and vision.
        </p>
      </div>
    </>
  );
}
  