import { Provider } from "react-redux";
import Router from "./Route/Router";
import store from "./redux/store";
import { Footer, Navigate, Toogle } from "./component";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./style.scss";
import {
  faLocationDot,
  faMoon,
  faPhone,
  faSun,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  library.add(
    fas,
    faTwitter,
    faFontAwesome,
    faLocationDot,
    faPhone,
    faInstagram,
    faWhatsapp,
    faMoon,
    faSun
  );

  return (
    <Provider store={store}>
      <Navigate />

      <Router />
      <Toogle />
      <Footer />
    </Provider>
  );
}

export default App;
