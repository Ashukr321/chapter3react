import img1 from '/src/assets/config.png';
import img2 from '/src/assets/jsx-ui.png';
import img3 from '/src/assets/state-mgmt.png';
import img4 from '/src/assets/jsx-ui.png';

const coreConcept = [
  {
    image: img1,
    title: "React",
    description: "React js is libary of the javascripts"
  },
  {
    image: img2,
    title: "node js ",
    description: "Node js is runtime envrironment of the chrome js engine"
  },
  {
    image: img3,
    title: "express js",
    description: "express js work on top of the node js "
  },
  {
    image: img4,
    title: "mongodb",
    description: "mongodb is document based database"
  }
];

import './index.css'
function CoreConcept() {
  return (
    <ul>
      <div id='items'>

      {coreConcept.map((item, index) => (
        <li key={index} id='list'>
          <img src={item.image} alt="" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
      </div>

    </ul>
  );
}

export default CoreConcept;
