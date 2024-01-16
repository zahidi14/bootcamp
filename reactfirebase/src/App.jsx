import { Provider } from "react-redux";
import Router from "./Route/Router";
import store from "./redux/store";
import { Caraousel, Footer, Navigate } from "./component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faPhone, fas } from "@fortawesome/free-solid-svg-icons";
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
    faWhatsapp
  );
  return (
    <Provider store={store}>
      <Navigate />

      <Router />
      <Footer />
    </Provider>
  );
}

export default App;
