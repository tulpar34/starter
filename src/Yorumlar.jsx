function Yorumlar({limit}) {
 
    // verileri bir api den çekmeyeceğiz statik olarak kendimiz olusturacağız

   const comments = [

   {id: 1, icerik: "Yorum 1", tarih: "22/11/13" },
   {id: 2, icerik: "Yorum 2", tarih: "22/11/14"},
   {id: 3, icerik: "Yorum 3", tarih: "22/11/15"},
   {id: 4, icerik: "Yorum 4", tarih: "22/11/16"}


   ]

    return(
        <>
        {comments.map( (comment, index) => 
        {
           if ( index < (limit)){

            return <p key={comment.id}>{comment.icerik} <span>{comment.tarih}</span></p>
           }
           // key paragrafin kendisine verdik dikkat et içeriğine değil css id  class gibi
           return <p key={comment.id}></p>
        }
        )}
        
        </>


    )   
}

export default Yorumlar