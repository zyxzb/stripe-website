import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'


const Submenu = () => {

  const {isSubmenuOpen, location, linkName:{page, links}} = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    // ref from aside container (submenu)
    const submenu = container.current;

    // coordination from context, set by Navbar component
    const {center, bottom} = location;

    setColumns('col-2')

    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if(links.length === 3) {
      setColumns('col-3')
    } else if(links.length > 3){
      setColumns('col-4')
    }
    
  },[location, links])

  return (
    <aside className={isSubmenuOpen ? 'submenu show' : 'submenu'} ref={container}>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) =>(
            <a key={index} href={link.url}>
              {link.icon} {link.label}
            </a>
          ))}
          </div>
    </aside>
  )
}

export default Submenu
