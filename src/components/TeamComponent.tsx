import React from "react";

interface TeamProps {
  team: any;
}

const TeamComponent = ({ team }: TeamProps) => {
  return (
    <section className="carousel">
      <section className="carousel-container">
        {team.map((item: any) => {
          return (
            <>
              <article className="carousel-item">
                <article className="carousel-texts">
                  <h1 className="title">{item.name}</h1>
                  <h2 className="subtitle">{item.skills}</h2>
                  <p className="biography">{item.biography}</p>
                  <a className="btn" href="">
                    Acesse o site
                  </a>
                </article>
                <div className="image">.</div>
              </article>
              {/* <img className="image" src={item.image} height={300} width={300} alt={item.name}/> */}
            </>
          );
        })}
      </section>
    </section>
  );
};

export default TeamComponent;
