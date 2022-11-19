import { useEffect, useState } from "react"

function App({color}) {

    const [sayac, sayacGuncelle] = useState(0)

    useEffect(() => {
      // akışta en son useeffect fonksiyonu çalışıyor
      // 2.bir parametre verebiliyoruz mutlaka array olmalı
      //document.title = sayac + " kere adim atildi" + color
       document.title = `tıklandı ${sayac} adim atildı + ${color}`

  }, [sayac]) 

  useEffect(() => {
    alert("Birden fazla useeffect kullanabiliriz.her render ' dan sonra çalışır")
  })

    function arttir() {
        sayacGuncelle(previousValue => previousValue +1)
    }
    return (
      <>
        <p>Adım Sayısı: {sayac}</p>
        <button onClick={arttir}> + </button>
         <p>{color}</p>
      </>
    )
}

export default App