import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';



function App() {
  return (
    <div className="website__bg--thinskyblue">
      
      {/* components called */}
      <div className="container">
        <Header></Header>
        <Main></Main>
      </div>

      <Footer></Footer>

    </div>
  );
}



export default App;
