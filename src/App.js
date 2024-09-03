import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Contact } from './Layouts/Pages';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* Home */}
            <Route path='/' element={<Home />} />

            {/* About */}
            <Route path='/about' element={<About />} />

            {/* Contact */}
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }

export default App;
