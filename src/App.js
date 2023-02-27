import './App.css';
import Home from './components/Home';
import SharedLayout from './components/sharedLayout';
import { Route, Routes } from 'react-router-dom';
import Erorrpage from './components/errorpage/errorpage';
import Register from './components/register/register';
import Login from './components/login/login';
import Followothers from './components/Followothers/Followothers';
import Save from './components/Followothers/save/save';
import Mapsgoogle from './components/mapMarker/map';


function App() {
  return <>
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='follow' element={<Followothers />} />
        <Route path='follow/save/:loc' element={<Save />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Register />} />
        {/* <Route path='map' element={<Mapsgoogle />} /> */}
        <Route path='*' element={<Erorrpage />} />
      </Route>
    </Routes>
  </>
}

export default App;
