
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import About from './components/About';
import Navbar from './components/Navbar'
import Singleproduct from './components/Singleproduct'
import Cart from './components/Cart'
import AdminPanel from './components/adminLayout/AdminPanel'
import ContactData from './components/adminLayout/ContactData'
import UserData from './components/adminLayout/UserData'
import Bottom from './components/Bottom'
import './Global.css'



function App(){
  return(
    <>
    {/*<style />*/}
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Singleproduct />} />
      <Route path='/cart' element={<Cart />}/>
      <Route path='/admin' element={<AdminPanel />}>
        <Route path="users" element={<UserData />} />
        <Route path="contact" element={<ContactData />} />
      </Route>
    </Routes>
    <Bottom/>
    </>
  )
}

export default App;