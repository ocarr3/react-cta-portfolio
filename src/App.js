import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/Home'
import About from './components/About'
import Contact from "./components/Contact"
import Project from "./components/Project"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />}>
        <Route index element = {<Home />} />
        <Route path = "/About" element = {<About />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/Project" element = {<Project />} />
      </Route> 
    </Routes>
    </>
  );
}

export default App;
