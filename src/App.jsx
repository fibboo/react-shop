import Header from "./layouts/Header.jsx";
import Shop from "./components/Shop.jsx";
import Footer from "./layouts/Footer.jsx";
import CartContextProvider from "./helpers/CartContextProvider.jsx";


export default function App() {
  return (
      <CartContextProvider>
        <div className="flex flex-col min-h-screen">
          <Header/>
          <Shop/>
          <Footer/>
        </div>
      </CartContextProvider>
  );
}