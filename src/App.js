import './App.css';
import Theme from './Theme';
import Navbar from './components/Navbar/Navbar';
import MenuNav from './components/MenuNav/MenuNav';

function App() {
  return (
    <Theme>
      <Navbar />
      <MenuNav />
    </Theme>
  );
}

export default App;
