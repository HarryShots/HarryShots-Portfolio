import React from "react";
import "./services.css";
import { MdOutlineLibraryAddCheck } from "react-icons/md";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>
                Creating content for your social media pages like TikTok,
                Instagram, Facebook
              </p>
            </li>
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>I create content that captivates and engages.</p>
            </li>
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>
                I can help you reach your target audience with engaging content.
              </p>
            </li>
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>I'm a creative thinker who can come up with original ideas.</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>I build websites that are both beautiful and functional.</p>
            </li>
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>
                I'm a web developer who loves to create user-friendly
                experiences.
              </p>
            </li>
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>I'm passionate about using technology to solve problems.</p>
            </li>
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>
                I'm a detail-oriented web developer who takes pride in my work.
              </p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        <article className="service">
          <div className="service__head">
            <h3>Photography/Videography</h3>
          </div>

          <ul className="service__list">
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>
                I take ordinary moments and turn them into extraordinary
                memories.
              </p>
            </li>
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>
                I cover events such as weddings, birthdays, funerals,
                graduations and all ceremonies.
              </p>
            </li>
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>
                I also offer creative photos and videos for your business
                adverts.
              </p>
            </li>
            <li>
              <MdOutlineLibraryAddCheck className="service__list-icon" />
              <p>
                I'm always looking for new ways to push the boundaries of
                photography/videography.
              </p>
            </li>
          </ul>
        </article>
        {/*END OF PHOTOGRAPHY*/}
      </div>
    </section>
  );
};

export default Services;
