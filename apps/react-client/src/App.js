import './App.css'
import Navbar from './components/Navbar'
import Posts from './components/Posts'

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="content">
        <Posts />
      </main>
    </div>
  );
}

export default App;
