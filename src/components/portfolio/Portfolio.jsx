import React, { useEffect, useState } from "react";
import axios from "axios";
import "./portfolio.css";
// import IMG1 from "../../assets/portfolio1.jpg";
// import IMG2 from "../../assets/portfolio2.jpg";
// import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";


const Portfolio = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://rich-puce-crocodile-slip.cyclic.app/api/portfolio").then(response => {
      const formattedData = response.data.data.map((item => ({
        id: item._id,
        image: item.image,
        title: item.title,
        github: item.github,
        demo: item.demo
      })));
      setData(formattedData)
    }).catch(error => {
      console.log("Error Fetching Portfolio Data: ", error);
    })
  }, [])

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
