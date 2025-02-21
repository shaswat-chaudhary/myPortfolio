import { useState } from 'react'
import { Routes, Route, useLocation, Outlet } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Contact } from './Pages/Contact'
import { Auth } from './auth/Auth';
import { Gallery } from './Pages/Gallery';
import './App.css'
import data from './data/userData.json'

function Layout() {
  const location = useLocation();
 
  return data.map((user) => (
    <div key={user.id}> </div>
  )) ? <Outlet /> : (
    <Navigator to="auth" state={{ from: location }} replace />
  )
}


function App() {


  return (
    <>
      <Routes>

        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery/:id?' element={<Gallery />} />
        </Route>

        <Route>
          <Route path='/auth' element={<Auth />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
