import React from 'react';
import ReactDOM from 'react-dom/client';

// bir component oluşturalim
function Kart(props) {
    return <p>Hello World {props.children} {props.color}</p>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Kart color='red'>
        { <span>!Mustafa</span> /* bunlar children(alt elemanlar) oluyor Kart'ın içerine yazdığımız her element bunlar componente prop olarak otomatik olarak gönderiliyor 
        spana erişmek için Kart'a propları parametre olarak aktarmamız gerek
        */}
    </Kart>
    
);

