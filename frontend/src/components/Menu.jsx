import { data } from "../restApi.json";
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            expedita odio accusantium voluptate et tempore officia aliquam
            aperiam labore, vero porro, asperiores iusto cupiditate
            reprehenderit!
          </p>
        </div>
        <div className="dishes_container">
          {data?.dishes.map((el) => (
            <div className="card" key={el.id}>
              <img src={el.image} alt={el.title} />
              <h3>{el.title}</h3>
              <button>{el.category}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
