import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPage from './components/NewPage';
import NextPage from './components/NextPage2';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<NewPage />} />
        <Route path='/next' element={<NextPage />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;