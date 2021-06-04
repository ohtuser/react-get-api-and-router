import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import Blog from './Blog.js';
import Home from './Home.js';

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path="/blog/:id">
                    <Blog/>
                </Route>

                <Route exact={true} path="/">
                    <Home/>
                </Route>
            
            </Switch>
        </Router>
    </div>
  );
}

export default App;
