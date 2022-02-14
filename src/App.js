import { Route, Routes } from 'react-router-dom';
import Todos from './pages/Todos';
import Users from './pages/Users';
import Header from './components/layout/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Users />}></Route>
        <Route path='/todos' element={<Todos />}></Route>
      </Routes>
    </div>
  );
}

export default App;
