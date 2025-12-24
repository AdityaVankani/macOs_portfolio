import WindowControls from '#components/Windowcontrols'
import { socials } from '#constants'
import WindowWrapper from '#hoc/windowWrapper'
import React from 'react'

function Contact() {
    return (
        <>
        <div id="window-header">
            <WindowControls target="contact"/>
            <h2>
                Contact Me
            </h2>
        </div>
            <div className="p-5 space-y-5">
                <img src="/images/picofme-2.png" alt="adi" 
                className='w-20 rounded-full'/>

                <h3>Let's connect</h3>
                <p>Got an idea? just wanna talk about tech? I'm in.</p>
                <p><a className='text-blue-400' href="mailto:adivankani@gmail.com">Send an Email</a></p>
                <p>Mobile: 9313412617</p>
                <ul>{socials.map(({
                    id,bg,link,icon,text
                })=>(
                    <li key={id} style={{backgroundColor:bg}}>
                        <a href={link}
                        target='_blank'
                        rel="noopener noreferrer"
                        title={text}
                        >
                            <img src={icon} alt={text} className='size-5' />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}</ul>
            </div>
        
        </>
    )
}
const contactwindow= WindowWrapper(Contact, "contact")

export default contactwindow
