import WindowWrapper from '#hoc/windowWrapper'
import WindowControls from '#components/Windowcontrols';
import React from 'react'
import { Download } from 'lucide-react';

import { pdfjs,Document,Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;



function Certi() {
    return (
        <>
        <div id="window-header">
            <WindowControls target="certi" />
            <h2>Certificate.pdf</h2>
            <a href="/files/360Design_Certificate.pdf" download className='cursor-pointer' 
            title="download resume">

                <Download className='icon'>

                </Download>
            </a>
        </div>
       
        <Document file="files/360Design_Certificate.pdf">
          <Page 
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
            
          />
        </Document>
      
        </>
    )
}

const certiwindow= WindowWrapper(Certi,"certi");
export default certiwindow
