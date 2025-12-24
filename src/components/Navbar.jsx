import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/window'
import dayjs from 'dayjs'
import React, { useState } from 'react'

function Navbar() {
  const { openWindow } = useWindowStore()
  const [dark, setDark] = useState(false)

  const handleIconClick = (action) => {
    switch (action) {
      case "wifi":
        alert("Connected to Internet")
        break

      case "search":
        openWindow("finder")
        break

      case "profile":
        openWindow("profile")
        break

      case "theme":
        document.documentElement.classList.toggle("dark")
        setDark(prev => !prev)
        break

      default:
        break
    }
  }

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="maclogo" />
        <p className="font-bold">Adi's portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img, action }) => (
            <li
              key={id}
              className="icon-hover"
              onClick={() => handleIconClick(action)}
              title={action}
            >
              <img src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar