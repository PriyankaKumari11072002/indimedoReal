import React from 'react'
import { Box, Card, Typography, CardMedia,CardActionArea,CardContent  } from '@mui/material';

const ProductCardImages = ({clickImages , clickImagesId,data}) => {

const styleToImages = `

.css-o69gx8-MuiCardMedia-root{
  object-fit:"fill !important"
}
`;
  return (
    <>
<div style={{width:"400px"}}>
    {styleToImages}
<CardMedia
        className='flex justify-center align-middle shadow   p-4  !object-fill'
          component="img"
          sx={{ objectFit: "fill" }} 
          height="140"
          image={clickImages ? clickImagesId : (data?.images_Src[0])}
          alt="green iguana"
        />
        
<div   className='flex justify-around align-middle shadow   p-4  w-60' >
        {data?.images_Src.map((images)=>(
         <CardMedia
         className=''
           component="img"
           sx={{height:"80px",width:"80px"}}
           image={images}
           alt="green iguana"
           onClick={()=>handleImages(images)}
         />
        ))}

        </div>   
</div>
    </>
  )
}

export default ProductCardImages