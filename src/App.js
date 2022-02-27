import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import CreatePup from "./components/CreatePup/CreatePup";
import PupCard from "./components/PupCard/PupCard";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <h1>Name this dog:</h1>
      <CreatePup />
      <PupCard />
    </div>
  );
}

export default App;
