import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Headers from './components/Headers';
import { Container, Row, Col} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Headers/>
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductScreen}/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
