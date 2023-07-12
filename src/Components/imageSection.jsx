import React, { useEffect, useState } from 'react'


export default function ImageSection({images}) {
    console.log(images)
     const [img, setImg]=useState(images[0] ? images[0] : null) 
    const changeImage=(index)=>{
setImg(images[index])

    } 
  return (

    <>
    <div className="container">
   <div className="col-md-4 align-items-center">
   <img src={img} alt="" className="img-fluid mb-5 " />
   </div>
  
    </div> 
    <div className="d-flex align-itm-center gap-3 bg-light border border-dark p-5 rounded    ">{
        images?.map((val,key)=>
       
    /* < div className={img==images[key]?('border-border-dark rounded-circle'):(null)} onClick={()=>changeImage(key)} key={key}>
      <img  className =' img-fluid ' src ={val} alt={'img-${key}'}></img></div> */
    
    
      < div className={img==images[key]?('border border-success'):(null)} onClick={()=>changeImage(key)} key={key}>
      <img  className =' img-fluid ' src ={val} alt={'img-${key}'}></img></div>
    )
}
    </div>
    </>
  ) 
}
