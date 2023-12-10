import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";
import How from "./components/How";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
import "./reset.css";
import "./global.css";

export default function App() {
  const [lang, setLang] = useState("EN");
  const style = {
    fontFamily: lang === "EN" ? 'Trebuchet' : 'Changa',
  };
  return (
    <div style={style}>
      <Header lang={lang} handleLang={setLang} />
      <Hero lang={lang} />
      <Why lang={lang} />
      <How lang={lang} />
      <JoinUs lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
