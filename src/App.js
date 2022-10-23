import './App.css';
import SpaceForBoards from './components/SpaceForBoards/SpaceForBoards';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className='content'>
          <SpaceForBoards />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
