import './App.css';
import Home from './components/Home';
import SharedLayout from './components/sharedLayout';
import { Route, Routes } from 'react-router-dom';
import Erorrpage from './components/errorpage/errorpage';
import Register from './components/register/register';
import Login from './components/login/login';
import Followothers from './components/Followothers/Followothers';
function App() {
  var myString = 'syria';
  var myWord = 'syria';
  var myPattern = new RegExp('(\\w*' + myWord + '\\w*)', 'gi');
  var matches = myString.match(myPattern);
  console.log(matches);


  return <>
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='follow' element={<Followothers />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Register />} />
        <Route path='*' element={<Erorrpage />} />
      </Route>
    </Routes>
  </>
}

export default App;
