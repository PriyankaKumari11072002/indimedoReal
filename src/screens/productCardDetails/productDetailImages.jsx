import React from 'react'
import {CardMedia } from '@mui/material';
import './productCard.css'
const ProductDetailImages = ({clickImages , clickImagesId,data, handleImages}) => {

  return (
    <>

<div>
<div
 style={{width:"220px",height:"230px",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid yellow"}}
 >

 <CardMedia
 style={{ width:"130px", height:"140px"}}
          component="img"
          image={clickImages ? clickImagesId : (data?.images_Src[0])}
          alt="green iguana"
        />
</div>       


<div   className='flex justify-around align-middle shadow  gap-4  '  style={{width:"100%",padding:"10px",marginTop:"15px"}}>
      {data?.images_Src.map((images,id)=>(

         <CardMedia
         key={id}
         className=''
           component="img"
           sx={{height:"80px"}}
           image={images}
           alt="green iguana"
           onClick={()=>handleImages(images)}
         />
        ))}

        </div>      
         
</div>


{/* <div  style={{width:"500px",height:"500px",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid yellow"}}>
    <div>
        <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/hboytqafpye9mnq5nr0r.jpg"  width="100" height="60"/>
    </div>
</div> */}

    </>
  )
}

export default ProductDetailImages