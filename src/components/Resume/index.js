import {useEffect, useState} from 'react';
import {Loader} from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import {useSpring, animated} from "react-spring";
import { Document, Outline, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;



const Resume = () => {
    return (
        <div className = 'container resume-page'>
            <div className = 'text-zone'>
                <Document file = {'https://s3.amazonaws.com/handshake.production/documents/documents/039/170/640/original/resume.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2HSNSGACXF6KKT2H%2F20230711%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230711T025724Z&X-Amz-Expires=10&X-Amz-SignedHeaders=host&X-Amz-Signature=4088988f433bd2003a93495751b2056398a6ab5b9c4b598fb0ab43fbe4fcd901'}>
                 <Page pageNumber={1}/>
                </Document>
            </div>
        </div>
    );
}

export default Resume