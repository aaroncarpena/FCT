import Cabecera from "./componentes/estructura/Cabecera.jsx"
import Rutas from "./rutas/Rutas.jsx";
import Contenido from "./componentes/estructura/Contenido.jsx"
import Footer from "./componentes/estructura/Footer.jsx"

function App() {
  return (
    <>
      <Cabecera />
      <Contenido>
        <Rutas />
      </Contenido>
      <Footer />
    </>
  );
}
export default App