import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Widgets from './Widgets.js'
import Login from './Login.js'
function App() {

  // const user = 'zlneez';
  const user = null;


  return (
    <div className="App">


      {!user ? (
        <Login />
      ) : (
        <>
          {/* header */}
          < Header />
          {/* App body */}
          < div className="app_body">
            <Sidebar />
            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
          {/* Sidebar */}
          {/* Feed */}
        </>
      )}


    </div >
  );
}

export default App;
