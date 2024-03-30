import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            nobis officia vitae quibusdam necessitatibus beatae accusantium
            itaque inventore!
          </p>
        </div>
        <div className="team_container">
          {data?.team.map((el) => (
            <div className="card" key={el.id}>
              <img src={el.image} alt={el.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
