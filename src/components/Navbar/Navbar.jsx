import React from 'react'
import Logo from '../../assets/images/IMDB_Logo.png';

import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center px-8 py-8'>

        <img className='w-[50px]' src={Logo} alt='logo' />

        <Link to='/' className='text-2xl text-blue-500 font-bold'>Movies</Link>

        <Link to='/watchlist' className='text-2xl text-blue-500 font-bold'>Watchlist</Link>

    </div>
  )
}

export default Navbar