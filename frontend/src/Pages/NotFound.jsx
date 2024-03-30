import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <img src="/notFound.svg" alt="Page Not Found" />
        <h1>LOOKS LIKE YOU ARE LOST</h1>
        <p>SORRY! We can not find the page you are looking for....</p>
        <Link to="/">
          Back to Home
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
