import logo from '../logo.svg';
import  './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Article from './article/Article.js';
import Nav from './nav/Nav.js';

function App(props) {
  return (
    <div className="App">
    <Header/>
    <Nav navigation = {props.navigation}/>
    <Article />
    <Article title = "Современные десктопные процессоры" content = "это ключевые компоненты персональных компьютеров, отвечающие за обработку данных и управление операциям" /> 
    <Footer />
    </div>
  );
}

export default App;
