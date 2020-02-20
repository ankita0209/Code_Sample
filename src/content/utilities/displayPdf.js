import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './pdfTest';

const DisplayPdf = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer> 
);

export { DisplayPdf }