import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopStories from './components/TopStories';
import LatestStories from './components/LatestStories';
import BestStories from './components/BestStories';

function App() {
  return (
    <div>
      <header>
      <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={TopStories} />
        <Route path='/TopStories' component={TopStories} />
        <Route path='/LatestStories' component={LatestStories} />
        <Route path='/BestStories' component={BestStories} />
      </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
