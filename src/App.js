import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Transactions from './components/Transactions'
import Search from './components/Search'
import AddTransaction from './components/AddTransaction'



function App() {
  return (
    <div className="App">
      <Search />
      <Navbar />
      <AddTransaction />
      <Transactions />

    </div>
  );
}

export default App;
