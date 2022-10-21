import './App.css';
import SpaceForBoards from './components/SpaceForBoards/SpaceForBoards';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='content'>
        <SpaceForBoards />
      </div>
    </div>
  );
}

export default App;
