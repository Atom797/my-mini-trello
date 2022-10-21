import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='content'>
        <Board/>
      </div>
    </div>
  );
}

export default App;
