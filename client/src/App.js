import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/Landing_page/Landing_page.jsx';
import HomePage from './components/Home_page/Home_page.jsx';
import AddGame from './components/Form_page/Form_page';
import DetailGame from './components/Detail_page/Detail_page';
import NavBar from './components/Navbar/NavBar.jsx';
import Load from './components/Load/load';
import { useLocation } from 'react-router-dom';





function App() {
const location = useLocation()


  return (
    <div className="App">
    <Route exact path='/videogames' render={() => <NavBar/>} />
    <Route exact path='/videogames/:id' render={() => <NavBar/>} />
    <Route exact path='/addGame' render={() => <NavBar/>} />
    <Switch>
    <Route exact path='/' render={() => <LandingPage />} />
    <Route exact path='/videogames' render={() => <HomePage />} />
    <Route exact path='/videogames/:id' render={() => <DetailGame/>} />
    <Route exact path='/addGame' render={() => <AddGame/>} />
    <Route exact path='/ad' render={() => <Load/>} />
    </Switch>
    </div>
  );
}

export default App;
