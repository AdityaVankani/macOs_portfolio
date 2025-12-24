import React, { useState } from 'react'
import WindowControls from '#components/Windowcontrols'
import WindowWrapper from '#hoc/windowWrapper'
import { Search } from 'lucide-react'
import { locations } from '#constants'
import useWindowStore from '#store/window'
import clsx from 'clsx'

function Profile() {
  const { openWindow } = useWindowStore()
  // keep profile navigation local to this window (do not touch global location store)
  const [location, setLocation] = useState(locations.profile)

  const openItem = (item) => {
    if (item.kind === 'folder') return setLocation(item)
    if (item.fileType === 'txt') return openWindow('txtfile', item)
    if (item.fileType === 'pdf') {
      const name = (item.name || '').toLowerCase()
      if (name.includes('cert') || name.includes('certificate')) return openWindow('certi', item)
      return openWindow('resume', item)
    }
    if (item.fileType === 'img') return openWindow('imgfile', item)
    if (item.fileType === 'url' && item.href) return window.open(item.href, '_blank')
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="profile" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Profile</h3>
          <ul>
            
            <li
              className={clsx(location.id === locations.profile.id ? 'active' : 'not-active')}
              onClick={() => setLocation(locations.profile)}
            >
              <p className="text-sm font-medium">Home</p>
            </li>
          </ul>
        </div>

        {/* Content */}
        <ul className="content">
          {location.children.map(item => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} className='w-15 h-15' alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const profileWindow = WindowWrapper(Profile, 'profile')
export default profileWindow