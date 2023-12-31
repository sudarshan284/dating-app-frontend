import Header from './components/header'
import './App.css';
import DatingCards from './components/DatingCards';
import SwipeButtons from './components/SwipeButtons';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
