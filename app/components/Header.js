
// useState; // It will throw Error bec: default server rended

// "use client"
// import React, { useState } from 'react'


import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link href={'/'}>Home</Link>
            </div>
            <div className='links'>
                <Link href={'/developers'}>Developers</Link>
                <Link href={'/developers/info'}>Personal Info</Link>
                <Link href={'/code/repos'}>Code Repos</Link>
            </div>
        </div>
    </header>
  )
}

export default Header