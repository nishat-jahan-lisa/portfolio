import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import logo from "../assets/Nishatlogo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo}  className="mx-2" width={80} height={63} 
            alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
           <a href="https://www.linkedin.com/in/nishat-jahan-0567b2238/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
                 <FaLinkedin />
          </a>
          <a href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github">
                 <FaGithub />
          </a>
          <a href="https://www.instagram.com/quran_makes_me_smile/p/C8mzQx2PBhs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
                 <FaInstagram />
          </a>
          <a href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook">
                 <FaFacebook />
          </a>
        
        </div>
    </nav>
      
  )
}

export default Navbar