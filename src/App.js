import './App.css';
import 'typeface-roboto';
import BlogsPage from './Components/BlogsPage/BlogsPage';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import 'typeface-roboto';
import BlogsPage2 from './Components/BlogsPage/BlogsPage2';
import BlogsPage3 from './Components/BlogsPage/BlogsPage3';
import BlogsPage4 from './Components/BlogsPage/BlogsPage4';

function App() {
	
  return (
    <div className="App font-sans">
    <Router>
	  <Routes>
		  <Route path='/' exact element={ <Home/> }/> 
		  <Route path="/blogs/FutureOfQAAutomationWithAI" element={ <BlogsPage /> }></Route>
      <Route path="/blogs/HowAICanMakeSoftwareTestingFaster" element={ <BlogsPage2 /> }></Route>
      <Route path="/blogs/EmbracingTheFullStackPath" element={ <BlogsPage3 /> }></Route>
      <Route path="/blogs/NavigatingTheFuture" element={ <BlogsPage4 /> }></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
