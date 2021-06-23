import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
function App() {
  return (
    <div className="App">


      {/* header */}
      <Header />
      {/* App body */}
      <div className="app_body">
        <Sidebar />
      </div>
        {/* Sidebar */}
        {/* Feed */}

    </div>
  );
}

export default App;
