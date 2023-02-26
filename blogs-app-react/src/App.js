import NavBar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Create from './Create';
import PageNotFound from './PageNotFound';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
