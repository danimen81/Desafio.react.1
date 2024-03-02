import "./App.css";
import Header from "./componentes/Header";
import MyCard from "./componentes/MyCard";
import Footer from "./componentes/Footer";


const App = () => {
  return (
    <>
      <Header titulo="Adopta un Perrito" />
      <div className="galeria">
        <MyCard
          img="https://images.pexels.com/photos/3027768/pexels-photo-3027768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="perro de playa"
          desc="Perro obediente, muy energético"
          bg="success"
          texto="texto"
        />
        <MyCard
          img="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="perro de playa"
          desc="Perro obediente, muy energético"
          bg="success"
          texto="texto"
        />
        <MyCard
          img="https://images.pexels.com/photos/11908214/pexels-photo-11908214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="perro de playa"
          desc="Perro obediente, muy energético"
          bg="success"
          texto="texto"
        />
        <MyCard
          img="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="perro de playa"
          desc="Perro obediente, muy energético"
          bg="success"
          texto="texto"
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
