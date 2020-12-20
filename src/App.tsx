import React from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Card } from "./components/Card";

import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App;
