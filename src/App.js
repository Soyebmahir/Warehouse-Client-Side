
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Home/Footer/Footer';
import Header from './component/Home/Header/Header';
import Home from './component/Home/Home/Home';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
      <h1>Hey there</h1>
    </div>
  );
}

export default App;
