import './App.css';

//components
import { Container } from 'reactstrap';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import News from './containers/News';
import NotFound from './components/NotFound';

//
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Table from './containers/Table';

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar />

        <Switch>
          <Route exact path="/">
            <Intro />
            <Container>
              <Slider />
            </Container>
          </Route>

          <Route exact path="/news">
            <News />
          </Route>

          <Route exact path="/table">
            <Table />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
