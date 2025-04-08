import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className='rootLayout'>
      <header>
        <Link to="/">
          <img src="/logo.png" alt=''/>
          <span>LAMA AI</span>
        </Link>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
