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
        
            {data?.ingredients.map((ingredients,id) => (
                <ul  className="list-disc mt-1">
              <li key={id}>{ingredients}</li>
              </ul>
            ))}
         
          <br />
        </Typography>
        <Typography variant="body2"  className="pt-2" >
          Key Benefits:
          <ul  className="list-disc  mt-1">
            {data?.highlights.map((highlights,id) => (
              <li key={id}>{highlights}</li>
            ))}
          </ul>
          <br />
        </Typography>
        <Typography variant="body2"   className="pt-2" >
          Directions For Use:{" "}
          <ul  className="list-disc  mt-1">
            {data?.directions_for_Use.map((directions,id) => (
              <li  key={id}  >{directions}</li>
            ))}
          </ul>
          <br />
        </Typography>
      </CardContent>
     
    </Card>
  );
};

export default ProductDescriptionAndBenifits;
