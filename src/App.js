import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.component';
import Navbar from './components/Navbar.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
