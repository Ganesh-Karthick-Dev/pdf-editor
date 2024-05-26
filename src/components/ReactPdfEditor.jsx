import React from 'react'
import {useEffect, useRef} from 'react';
import WebViewer from '@pdftron/webviewer'


 
export const MyComponent = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        licenseKey: 'demo:1716735913673:7fd9231403000000008f816ce11b7398da7fc81e5cd8d2663b2f8e402a',
        initialDoc: 'Ganesh_karthick_web_developer_1.pdf',
      },
      viewer.current,
    ).then((instance) => {
        const { documentViewer } = instance.Core;
        // you can now call WebViewer APIs here...
      });
  }, []);

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}>  
      </div>
    </div>
  );
};

const ReactPdfEditor = () => {
  return (
    <>
    {/* <MyComponent /> */}
    </>
  )
}

export default ReactPdfEditor



