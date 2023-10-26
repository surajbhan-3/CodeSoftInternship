
import './App.css';
import Createtodo from './components/CreateTodo/Createtodo';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar />
        <div className="main-menu">
          <div className="main-menu-wrapper">
          <div className="add-task">
          <Createtodo />

          </div>
          <div className="edit-task">

          </div>
          <div className="all-task">

          </div>

          </div>
        
     
        </div>
 
    </div>
  );
}

export default App;
