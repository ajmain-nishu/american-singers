import './App.css';
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

    </div>
  );
}



export default App;
