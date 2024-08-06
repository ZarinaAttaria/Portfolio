import "./App.css";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="intro">
        <h2>Hello, Its me Zarina Attaria</h2>
        <h3> I am a frontend developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          unde voluptatem beatae{" "}
        </p>
        <a href="" target="_blank">
          {/* <FontAwesomeIcon icon={faCoffee} size="2x" /> */}
        </a>
      </div>
    </>
  );
}

export default HomePage;
