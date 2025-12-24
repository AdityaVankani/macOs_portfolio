import React from 'react'
import WindowControls from '#components/Windowcontrols'
import WindowWrapper from '#hoc/windowWrapper'
import { photosLinks, gallery } from '#constants'
import useWindowStore from '#store/window'
import { useState, useMemo } from 'react'
import clsx from 'clsx'

function Photos() {
    const { openWindow } = useWindowStore();
    const [activeAlbum, setActiveAlbum] = useState(1)

    const openImage = (name, imageUrl) => {
        openWindow('imgfile', { name, imageUrl });
    }

    const filteredGallery = useMemo(() => {
  switch (activeAlbum) {
    case 1: // Library – all
      return gallery

    case 2: // quotes
      return gallery.filter(g => g.id >= 3 && g.id <= 8)

    case 3: // certi
      return gallery.filter(g => g.id >= 9 && g.id <= 15)

    case 4: // People
      return gallery.filter(g => g.id >= 1 && g.id <= 2)

    case 5: // Favorites
      return gallery.filter(g => g.id >= 9)

    default:
      return gallery
  }
}, [activeAlbum])

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2>Gallery</h2>
            </div>

            <div className='bg-white flex h-full'>
                <div className='sidebar'>
                    <div>
                        <h3>Albums</h3>
                        <ul>
                            {photosLinks.map((item) => (
                                <li key={item.id} onClick={() => setActiveAlbum(item.id)} className={clsx(item.id === activeAlbum ? 'active' : 'not-active')}>
                                    <img src={item.icon} className='w-4' alt={item.title} />
                                    <p className='text-sm font-medium truncate'>{item.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <ul className='content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
                    {filteredGallery.map((g) => (
                        <li key={g.id} className='cursor-pointer' onClick={() => openImage(`Image ${g.id}`, g.img)}>
                            <div className='rounded-lg overflow-hidden bg-gray-100'>
                                <img src={g.img} alt={`Image ${g.id}`} className='w-full h-36 object-cover' />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const photoswindow = WindowWrapper(Photos, 'photos')

export default photoswindow
