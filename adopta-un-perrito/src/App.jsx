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
          name="Salvaje"
          desc="Muy juguetón, un perro todo terreno para compartir tus aventuras al aire libre, muy leal y con mucha energía para compartir"
          bg="success"
          texto="Husky"
        />
        <MyCard
          img="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Corcho"
          desc="Un perro muy juguetón y amigable, especial para compartir con los niños de la familia, protector y entusiasta"
          bg="danger"

          texto="Corgi Galés"
        />
        <MyCard
          img="https://images.pexels.com/photos/11908214/pexels-photo-11908214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Edward"
          desc="Un gran compañero del hogar , siempre activo, con mucha energía para compartir con todos los miembros de la casa"
          bg="primary"
          texto="German Shepherd"
        />
        <MyCard
          img="https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Toby"
          desc="Un cachorro buscando un hogar para vivir, muy sociable tanto con las personas como con otras mascotas, cariñoso y juguetón"
          bg="info"
          texto="Puggle"
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
