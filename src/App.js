
import './App.css';
import {BrowserRouter as Router,
Route,
Link,
Routes} from 'react-router-dom';
import Addquestion from "./components/Addquestion";
import Editquestion from "./components/Editquestion";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Router>
       <ul>
          <ul><Link to="/questions/list">List</Link></ul>
          <ul><Link to="/questions/Addquestion">Add Question</Link></ul>

        </ul>
        <Routes>
        <Route path="/questions/list" element={<List/>}></Route>
        <Route path="/questions/Addquestion" element={<Addquestion/>}></Route>
        <Route path='/questions/Editquestion/:id' element={<Editquestion />}></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
