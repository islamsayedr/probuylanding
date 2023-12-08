import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";
import How from "./components/How";
import Footer from "./components/Footer";
import './reset.css'
import './global.css'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Why />
      <How />
      <Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


