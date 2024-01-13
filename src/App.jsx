import { useEffect } from "react";
import react_logo from "/src/assets/react-core-concepts.png";

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
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
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
      <main>
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
