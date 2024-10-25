import './App.css';
import Header from './header'
import Home from './home'
import Greatest from './greatest_tea'
import Shop from './shop'
import Know from './know_more'
import Blog from './blog'
import Contact from './contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Greatest' element={<Greatest />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/Know' element={<Know />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
