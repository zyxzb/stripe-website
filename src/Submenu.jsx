import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'


const Submenu = () => {

  const {isSubmenuOpen, location, linkName:{page, links}} = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    // ref from aside container (submenu)
    const submenu = container.current;

    // coordination from context, set by Navbar component
    const {center, bottom} = location;

    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

  },[location])

  return (
    <aside className={isSubmenuOpen ? 'submenu show' : 'submenu'} ref={container}>
        <h4>{page}</h4>
    </aside>
  )
}

export default Submenu
