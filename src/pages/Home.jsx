import "../styles/home.scss";
import Card from "../components/Card.jsx";

function Home() {
  const images = [
    { id: 1, src: "image/js.png", alt: "Javascript", animate: "jump-img " },
    { id: 2, src: "image/html.png", alt: "HTML 5", animate: "jump-img " },
    { id: 3, src: "image/css.png", alt: "CSS", animate: "jump-img " },
    { id: 4, src: "image/react.png", alt: "REACT JS", animate: "rotate-img " },
    { id: 5, src: "image/redux.png", alt: "REDUX", animate: "jump-img" },
    { id: 6, src: "image/sass.png", alt: "SASS", animate: "jump-img " },
    { id: 7, src: "image/node_js.png", alt: "NODE JS", animate: "jump-img" },
    { id: 8, src: "image/mysql.png", alt: "MY SQL", animate: "jump-img" },
  ];

  return (
    <section>
      <div className="home">
        <h1>Hi, I'm a Web Developer 👋</h1>
        <p>
          I build modern, responsive web applications using React, SCSS, Tailwind,
          Node.js, and JavaScript.
        </p>
        <div className="slider-container">
          <div className="slider-track">
            {images.map((img) => (
              <Card
                key={img.id}
                alt={img.alt}
                src={img.src}
                animate={img.animate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
