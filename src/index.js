import React from 'react';
import ReactDOM from 'react-dom/client';

// bir component olusturalim

function Bilesen({KutuNo}) {

    let sayi = KutuNo

    return (
        <>
        <p>Hangi Kutu?</p>
        {sayi === 2 ? <Kutu2 /> : <Kutu1/>}
        </>
        
        )} /* Ternary Conditioanal*/


function Kutu1() {
    return "Ben Kutu1 im"
}
function Kutu2() {
    return "Ben Kutu2 yim"
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Bilesen KutuNo = {2}/>
  
);

