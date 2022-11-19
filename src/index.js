import React from 'react';
import ReactDOM from 'react-dom/client';
import Yorumlar from './Yorumlar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <> 
    <h1>Yorumlar</h1>
    <Yorumlar limit={2} />
    <Yorumlar limit={3} />
    </>
  
);

