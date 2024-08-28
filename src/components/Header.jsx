const reactDesc = ["Core", "Important", "Crucial"];
const images = [ "react-core-concepts.png"];


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

    const desc = reactDesc[genRandomInt(2)];
    const img = images[0];
    let imgString = `src/assets/${img}`;
  
    return (
      <header>
        <img src={imgString} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {desc} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }

  