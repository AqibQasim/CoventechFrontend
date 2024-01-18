import './App.css';
import 'typeface-roboto';
import BlogsPage from './Components/BlogsPage/BlogsPage';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import 'typeface-roboto';

function App() {
  return (
    <div className="App font-sans">
    <Router>
	  <Routes>
		  <Route path='/' exact element={ <Home/> }/> 
		  <Route path="/blogs/FutureOfQAAutomationWithAI" element={ <BlogsPage /> }></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;