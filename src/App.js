
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Factory from './components/Factory/Factory';
import Question from './components/Question/Question';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Factory></Factory>
      <Question></Question>
    </div>
  );
}

export default App;
