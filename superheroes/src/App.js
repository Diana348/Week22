import "./App.css";
import HeroCard from "./components/ui/HeroCard";
import heroesArr from "./data/superheroes";

function App() {
  console.log(heroesArr);
  return (
    <div className="container">
      <div className="container-title"></div>
      <div className="heroes-block">
        {heroesArr.map((heroObj, i) => (
          <HeroCard key={heroObj.name + i} hero={heroObj} />
        ))}
      </div>
    </div>
  );
}

export default App;
