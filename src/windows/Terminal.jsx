import { techStack } from '#constants';
import WindowWrapper from '#hoc/windowWrapper';
import Windowcontrols from '#components/Windowcontrols';
import { Check, Flag } from 'lucide-react';
import React from 'react'

function Terminal() {
    return (
    <>
    <div id="window-header">
        <Windowcontrols target="terminal"/>
        <h2>Tech stack</h2>
    </div>
    <div className='techstack'>
        <p>
            <span className='font-bold'>
                @adi % 
            </span>
            show tech stack
        </p>
        <div className='label'>
            <p className='w-50'> Category</p>
            <p>Technologies</p>
        </div>
        <ul className="content">
            {techStack.map(({category,items})=>(
                <li key={category} className='flex items-center'>
                    <Check className='check' size={20}/>
                    <h3 className='w-50'>{category}</h3>
                    <ul >{items.map((item,i)=>(
                        <li  key={i}> {item}{i<items.length-1 ? "," : ""}
                            </li>
                    ))}</ul>
                </li>
            ))}
        </ul>
        <div className='footnote'><p>
            <Check size={20}/> 5 of 5 stacks loaded successfully (100%)

            </p>
            <p className='text-black'>
                <Flag size={15} fill="blacl" /> 
                Render time: 5ms
            </p>
            </div>
    </div>
    </>
    );
}

const terminalwindow = WindowWrapper(Terminal,'terminal');

export default terminalwindow
