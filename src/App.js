import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

//Pages
import Home from './Pages/Home';
import ToDo from './Pages/ToDo';

//Component
import MainNavbar from './Components/MainNavBar';

function App() {
  return (
    <div>
      <Router>
        <MainNavbar/>
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<ToDo />} path='/todo'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App; 