import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [category]); /// <--- This is the dependency array
  /// si yo dejo la dependencia vacia significa que solo se ejecuta una vez

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
