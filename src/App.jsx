import "./App.css";
import "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="UserSection">
        <CardUser
          name="Plato Luna"
          date="Plato estilo Luna redondo"
          description="4600$"
          img="https://peltrina.com.ar/5059-large_default/set-tirador-.jpg"
        />
        <CardUser
          name="Bacha de Hoja"
          date="Bacha Forma de hoja"
          description="12000 $"
          img="https://i.pinimg.com/564x/77/f9/99/77f999e36a083dc00bfebe7f35342d30.jpg"
        />
        <CardUser
          name="Taza Moderna"
          date="Combo x6 tazas modernas"
          description="6784 $"
          img="https://i.pinimg.com/564x/bb/d7/72/bbd772310184a71f5af6e6d8aabbe884.jpg"
        />
      </div>
    </div>
  );
};

export default App;
