import { useEffect, useState } from "react";
import react_logo from "/src/assets/react-core-concepts.png";
import CoreConcept from "./CoreConcept";
import Login from "./Login";
// import DynamicData from "./DynamicData";

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
  const [data,setData] = useState('please select datats');
  useEffect(() => {
    document.title = "techyashu";
  }, []);

 
const handleSelect = (data)=>{
   setData(data);
  console.log(data);

}
 

  const content = [
    
      "components are the building blocks of a user interface. They are reusable and encapsulate a piece of UI along with its behavior. React applications are typically composed of multiple components that work together to create the overall user interface." ,

   "lifecycle of a component refers to the series of events that occur during the component's existence, from its creation to its destruction. These lifecycle events allow you to perform actions at different stages of a component's life. React class components have different lifecycle methods, but with the introduction of React Hooks in functional components, the concept of lifecycle methods is somewhat different.",
  "props it's a mechanism for passing data from a parent component to a child component. Props are a way to communicate and share information between React components. They are essentially a set of attributes or parameters that you can pass to a React component when you use it in another component.",


  " state is a JavaScript object that represents the current condition or data of a component. The state of a component can change over time due to user interactions, network responses, or other dynamic factors. Unlike props, which are passed down from a parent to a child and are immutable, the state is managed internally by the component and can be changed using the setState method."
  ]
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


      <menu>
        <button onClick={()=>{handleSelect(content[0])}}>
          components
        </button>

        <button onClick={()=>{handleSelect(content[1])}}>
          react life-cycle
        </button> 
        <button  onClick={()=>{handleSelect(content[2])}}>
          props
        </button> 
        <button onClick={()=>{handleSelect(content[3])}}>
          state
        </button>
        <div>

        <p>{data}</p>

        </div>

      </menu>




    </>
  );
}

export default App;
