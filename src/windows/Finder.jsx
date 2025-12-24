import React from 'react'
import  Windowcontrols   from '#components/Windowcontrols'
import { Search } from 'lucide-react'
import WindowWrapper from '#hoc/windowWrapper'
import { locations } from '#constants'
import useLocationStore from '#store/location'
import clsx from 'clsx'
import useWindowStore from '#store/window'
function Finder() {
    const {openWindow} =useWindowStore(); 
    const {activeLocation, setActiveLocation} =useLocationStore();

    const openItem = (item) =>{
        if (item.fileType === 'pdf') {
            const name = (item.name || '').toLowerCase();
            if (name.includes('cert') || name.includes('certificate')) return openWindow('certi', item);
            return openWindow("resume", item);
        }
        if(item.kind==='folder') return setActiveLocation(item);
        if(['fig','url'].includes(item.fileType) && item.href)
            return window.open(item.href,"_blank");


        openWindow(`${item.fileType}${item.kind}`,item);
    }
    return (
        <>
        <div id='window-header'>
            <Windowcontrols  target="finder"/>
            <Search className="icon"></Search>
        </div>

        <div className='bg-white flex h-full'>
            <div className='sidebar'>
                <div>
                <h3>Favorites</h3>
                <ul>
                    {Object.values(locations).filter(item => item.type !== "profile").map((item)=>(
                        <li key={item.id} onClick={()=> setActiveLocation(item)} className={clsx(item.id===activeLocation.id ? 'active':'not-active')}>
                            <img src={item.icon} className='w-4' alt={item.name} 
                            />
                            <p className='text-sm font-medium truncate'>{item.name}</p>
                        </li>
                    ))}
                    </ul>
                    </div>
                <div>
                <h3>Work</h3>
                <ul>
                    {locations.work.children.map((item)=>(
                        <li key={item.id} onClick={()=> setActiveLocation(item)} className={clsx(item.id===activeLocation.id?'active':'not-active')}>
                            <img src={item.icon} className='w-4' alt={item.name} 
                            />
                            <p className='text-sm font-medium truncate'>{item.name}</p>
                        </li>
                    ))}
                    </ul>
                    </div>

            </div>

        <ul className='content'>
            {activeLocation?.children.map((item)=>(
                <li key={item.id} className={item.position} onClick={()=>openItem(item)}>
                    <img src={item.icon} alt={item.name}  />
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
        </div>
        </>
        
    ) 
}

const finderwindow= WindowWrapper(Finder,"finder");

export default finderwindow
