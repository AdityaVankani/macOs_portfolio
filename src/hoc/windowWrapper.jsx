import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import React, { useLayoutEffect, useRef } from 'react'

const WindowWrapper =( Component,windowKey)=> {
    const wrapped=(props)=>{
        const {focusWindow,windows} =useWindowStore();
        const {isOpen,zIndex,isMaximized} =windows[windowKey];
        const ref= useRef(null);

        useGSAP(()=>{
            const el=ref.current;
            if(!el || !isOpen) return;
            el.style.display="block";
            gsap.fromTo(el,{scale:.8,
                opacity:0,
                y:40,
            },{scale:1,opacity:1,y:0,duration:0.5,
                ease:"power3.out"
            })

        },[isOpen]);
        

        useGSAP(()=>{
            const el=ref.current;
            if(!el) return;
            // don't allow dragging when maximized
            if (isMaximized) return;
            const [instance] = Draggable.create(el,{
                onPress:()=> focusWindow(windowKey)
            });

            return ()=> instance?.kill(); 
        },[isMaximized])
        useLayoutEffect(()=>{
            const el=ref.current;
            if(!el) return ;
            el.style.display= isOpen?"block" :"none";

        },[isOpen])
        

        const style = { zIndex };
        if (isMaximized) {
            style.top = 0;
            style.left = 0;
            style.width = '100dvw';
            style.height = '100dvh';
        }

        return <section id={windowKey} ref ={ref} style={style}
        className='absolute'>
            <Component {...props} />

        </section>

    }
    wrapped.displayName=`WindowWrapper(${Component.displayName 
        ||
        Component.name 
        || 
        "component"
    })`;
    return wrapped;

    
}
export default WindowWrapper;
