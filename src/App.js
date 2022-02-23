import './App.css';
import {BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Home from './Pages/Home';
import User from './Pages/User';


function App() {
  return (
   <Router>
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/coup-de-coeur" element={<User />}/>
     </Routes>
   </Router>
  );
}

export default App;
