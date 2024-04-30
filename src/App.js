import logo from './logo.svg'
import './App.css';
import Navbar from './components/Navbar'
import Transactions from './components/TransactionsTable'
import Search from './components/Search'
import AddTransaction from './components/AddTransaction';


function App() {

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
  }
  return (
    <div className="App">
      <Navbar />
      <Search onsearch={handleSearch}/>
      <AddTransaction />
      <Transactions />


    </div>
  );
}

export default App;
