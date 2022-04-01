// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Cards from './components/Cards'

import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div>
          <Routes>
            <Route path="/search"  element={
              <SearchPage/>
            }/>
            <Route path="/" element={
              <HomePage/>
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
