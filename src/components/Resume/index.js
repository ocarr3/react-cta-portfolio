import {useEffect, useState} from 'react';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {Loader} from 'react-loaders';
import './index.scss';
import { Document, Page,} from 'react-pdf';
import {PDFDownloadLink, StyleSheet} from '@react-pdf/renderer'
import { pdfjs } from 'react-pdf';
import { useWindowWidth} from '@wojtekmaj/react-hooks';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
  
 

const Resume = () => {
    const width = useWindowWidth();
    return (
        <>
        <div className = 'container resume-page'>
            <div className = 'text-zone'>
                <Document className = "pdf" file = {'https://ocarr3.github.io/react-cta-portfolio/resume.pdf'}>
                     <Page pageNumber={1} width = {Math.min(width * 0.9, 650)}/>
                </Document>
                <div>
                     <a target = "_blank" rel = "noreferrer" href='https://ocarr3.github.io/react-cta-portfolio/resume.pdf'><button className='download-button' >Download</button></a>
                </div>

            </div>
        </div>
        <Loader type = "pacman"/>
        </>

    );
}

export default Resume