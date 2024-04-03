import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const ProductDescriptionAndBenifits = ({ data }) => {
  //    console.log(data.title,'datades')

  return (
    <Card style={{ width: "100%" ,padding:'10px'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.dark" gutterBottom>
          {data?.title}
        </Typography>
        <Typography variant="h5" component="div"></Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data?.description}
        </Typography>

        <Typography variant="body2"  className="pt-2"  >
          Key Ingredients:
        
            {data?.ingredients.map((ingredients) => (
                <ul  className="list-disc mt-1">
              <li key={data._id}>{ingredients}</li>
              </ul>
            ))}
         
          <br />
        </Typography>
      
        <Typography variant="body2"  className=" hidden md:block lg:hidden"  >
      
              Product benifits:
              {data?.highlights.map((highlights)=>(
                  <ul  className="list-disc  mt-1"  key={data._id}>  
           <li>{highlights} </li>
           </ul>
              ))}
             
    
            </Typography>


        <Typography variant="body2"  className="pt-6"  >
          Key Benefits:
         
            {data?.highlights.map((highlights,id) => (
               <ul  className="list-disc  ">
              <li key={id}>{highlights}</li>
              </ul>
            ))}

          <br />
        </Typography>
        <Typography variant="body2"   className="pt-1" >
          Directions For Use:{" "}
       
            {data?.directions_for_Use.map((directions,id) => (
                 <ul  className="list-disc  mt-1">
              <li  key={id}  >{directions}</li>
              </ul>
            ))}

          <br />
        </Typography>
      </CardContent>
     
    </Card>
  );
};

export default ProductDescriptionAndBenifits;
