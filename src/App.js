import React from "react";
import { Header } from './components/header';
import { Footer } from "./components/footer";
import { Shop } from "./components/Shop";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;