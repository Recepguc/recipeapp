import React from "react";
import { Button, RecipeCard, RecipeHeader, RecipeImage } from "./HomeStyles";

const RecipeCardComp = ({ recipe1 }) => {
  return (
    <RecipeCard>
      <RecipeHeader>{recipe1.label}</RecipeHeader>
      <RecipeImage src={recipe1.image} />
      <Button>Viev More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;
