import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { About } from './components/Aboutus';
import {Home} from './components/Home';
import {WeatherBg} from './components/WeatherBg';
import Upload from './components/Upload';

function App() {

  return (
    <div>
      <Navbar />
      <WeatherBg />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

