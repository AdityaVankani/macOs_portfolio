import { dockApps } from '#constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useWindowStore from '#store/window';
import React, { useRef } from 'react'
import { Tooltip } from 'react-tooltip';

function Dock() {
    const {openWindow,closeWindow,windows} = useWindowStore();
    const dockRef= useRef(null);
useGSAP(()=>{
    const  dock = dockRef.current;
    if(!dock) return;
    const icons =dock.querySelectorAll(".dock-icon");
    const animateicons= (mouseX)=>{
        const {left} = dock.getBoundingClientRect();
        icons.forEach((icon)=>{
            const {left :iconLeft,width} =icon.getBoundingClientRect();
            const center =iconLeft -left+width/2;
            const dist=Math.abs(mouseX-center);
             const intensity= Math.exp(-(dist**2.5)/2000);
             gsap.to(icon,{
                scale:1 +.25*intensity,
                y:-15*intensity,
                duration :.2,
                ease:"power1.out"

             })
        })
    };
    const hanldeMouseMove=(e)=>{
        const {left}= dock.getBoundingClientRect();
        animateicons(e.clientX-left);

    };
    const resetIcons=()=>
        icons.forEach((icon)=>
            gsap.to(icon,{
                scale:1,
                y:0,
                duration:.3,
                ease:"power1.out"
            })
        )
    

        dock.addEventListener('mousemove',hanldeMouseMove);
        dock.addEventListener('mouseleave',resetIcons);
        return ()=>{
            dock.removeEventListener("mousemove",hanldeMouseMove); 
            dock.removeEventListener("mouseleave",resetIcons); 
        }
},[]);



     const toggleApp =(app) =>{
        if(!app.canOpen) return;
        const window= windows[app.id];
        if(window.isOpen){
            closeWindow(app.id);
        }
        else{
            openWindow(app.id);
        }
        
     };
    return  <section id="dock">
        <div ref={dockRef} className='dock-container'>
            {dockApps.map(({id,name,icon,canOpen})=>
            (
                <div key={id} className='relative flex justify-center'>
                    <button type="button"
                    className='dock-icon'
                    aria-label={name}
                    data-tooltip-id="dock-tooltip"
                    data-tooltip-content={name}
                    data-tooltip-delay-show={150}
                    disabled= {!canOpen}
                    onClick={()=> toggleApp({id,canOpen})}
                     >
                        <img src={`/images/${icon}`} alt={name}
                        loading="lazy"
                        className={canOpen?"" :"opacity-60"} />
                     </button>
                    </div>
            ))}
            <Tooltip id="dock-tooltip" place="top" className='tooltip'/>
        </div>
    </section>
        
    
}

export default Dock
