import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">-Vx-</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data?.navbarLinks.map((el) => (
            <Link
              to={el.link}
              key={el.id}
              spy={true}
              smooth={true}
              duration={500}
            >
              {el.title}
            </Link>
          ))}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger">
        <GiHamburgerMenu onClick={() => setShow(!show)} />
      </div>
    </nav>
  );
};

export default Navbar;
