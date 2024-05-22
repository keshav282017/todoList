import React from 'react'

function Navbar() {
  return (
    <nav  className='bg-slate-500 font-bold text-xl p-3  flex flex-wrap'>
        <ul className='flex flex-wrap gap-7 text-white  '>
            <li>Your Tasks</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Navbar