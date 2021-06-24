import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
function App() {
  return (
    <div className="App">



      {/* header */}
      <Header />
      {/* App body */}
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
        {/* Sidebar */}
        {/* Feed */}

    </div>
  );
}

export default App;
