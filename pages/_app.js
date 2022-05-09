import "../styles/globals.css";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../store/reducers";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

let composeEnhancers = compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
