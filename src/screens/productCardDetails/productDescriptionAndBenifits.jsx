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
    <Card style={{ width: "100%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.dark" gutterBottom>
          {data?.title}
        </Typography>
        <Typography variant="h5" component="div"></Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data?.description}
        </Typography>

        <Typography variant="body2">
          Key Ingredients:
          <ul>
            {data?.ingredients.map((ingredients,id) => (
              <li key={id}>{ingredients}</li>
            ))}
          </ul>
          <br />
        </Typography>
        <Typography variant="body2">
          Key Benefits:
          <ol>
            {data?.highlights.map((highlights,id) => (
              <li key={id}>{highlights}</li>
            ))}
          </ol>
          <br />
        </Typography>
        <Typography variant="body2">
          Directions For Use:{" "}
          <ol>
            {data?.directions_for_Use.map((directions,id) => (
              <li  key={id}>{directions}</li>
            ))}
          </ol>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductDescriptionAndBenifits;
