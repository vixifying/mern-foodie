import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only think we are serioius about is Food</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            officiis perspiciatis aliquam nulla? Animi quos recusandae
            exercitationem voluptatem iusto? Dicta ratione quis mollitia aperiam
            voluptatibus esse veritatis molestiae non. Tempora dolor facilis
            beatae dignissimos vel, error consequatur, qui porro fugiat minima
            provident ad molestias voluptatem dolore blanditiis? Veniam,
            delectus veritatis.
          </p>
          <Link to="/">
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="ABOUT" />
        </div>
      </div>
    </section>
  );
};

export default About;
