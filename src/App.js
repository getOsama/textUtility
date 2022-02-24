import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <div>
      <Navbar title ="CodeWorthy" home="HOME" portfolio= "PORTFOLIO" services= "SERVICES"/>
      {/* <Navbar /> */}
      <Textform/>
    </div>
  );
}

export default App;
