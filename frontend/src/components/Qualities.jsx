import { data } from "../restApi.json";

const Qualities = () => {
  return (
    <section className="qualities" id="qualities">
      <div className="container">
        {data?.ourQualities.map((el) => (
          <div className="card" key={el.id}>
            <img src={el.image} alt={el.title} />
            <div className="title">{el.title}</div>
            <div className="description">{el.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;
