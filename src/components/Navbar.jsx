import { navIcons, navLinks } from '#constants';
import dayjs from 'dayjs';
import React from 'react'

function Navbar() {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="maclogo" />
                <p className='font-bold'>Adi's portfolio</p>
                
                <ul>
                    {
                        navLinks.map(
                            ({id,name}) => (
                                <li key={id}>
                                    <p>{name}</p>
                                </li>
                            )
                        )
                    }
                </ul>
                </div>
                <div>
                    <ul>
                        {
                            navIcons.map(
                                ({id,img})=>(
                                    <li key={id} className='icon-hover'>
                                        <img src={img} alt={`icon-${id}`} />
                                    </li>
                                )
                            )
                        }
                    </ul>
                    <time> {dayjs().format("ddd MMM D h:mm A")}</time>
                </div>
        
        </nav>
    )
}

export default Navbar;
