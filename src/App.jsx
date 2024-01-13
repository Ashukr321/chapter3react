import { useEffect } from "react";
import react_logo from "/src/assets/react-core-concepts.png";
import CoreConcept from "./CoreConcept";
import Login from "./Login";

const reactDescription = ["Fundamental ", "Crucial", "Core"];

//  this function declration
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={react_logo} alt="stylized atom" />
      <h1>Mern Essentials</h1>
      <p>
        {description} mern concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  useEffect(() => {
    document.title = "techyashu";
  }, []);
  return (
    <>
      <Header />
      <section id="core-concepts">
        <h2>mern stack </h2>
        <div id="info_container">
          <CoreConcept />
        </div>
      </section>
      <Login/>
    </>
  );
}

export default App;
