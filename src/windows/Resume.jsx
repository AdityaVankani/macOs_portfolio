import WindowWrapper from '#hoc/windowWrapper'
import WindowControls from '#components/Windowcontrols';
import React from 'react'
import { Download } from 'lucide-react';

import { pdfjs,Document,Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;



function Resume() {
    return (
        <>
        <div id="window-header">
            <WindowControls target="resume" />
            <h2>Resume.pdf</h2>
            <a href="files/resume.pdf" download className='cursor-pointer' 
            title="download resume">

                <Download className='icon'>

                </Download>
            </a>
        </div>
       
        <Document file="files/resume.pdf">
          <Page 
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
            
          />
        </Document>
      
        </>
    )
}

const resumewindow= WindowWrapper(Resume,"resume");
export default resumewindow
