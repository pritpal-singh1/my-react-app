import HeaderContent from './components/headerContent';
import SearchContainer from './components/SearchContainer';
import DrugCardComponent from './components/DrugCardComponent.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderContent />
      <SearchContainer />
      <div className="drug-cards-container">
        <DrugCardComponent />
      </div>
    </div>
  );
}

export default App;
