import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  //console.log(categories);

  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return;
    //setCategories([...categories, "HunterXHunter"]);
    setCategories((cats) => [...cats, onNewCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
