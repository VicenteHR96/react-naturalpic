import { useEffect, useState } from "react";
import { PhotoContext } from "./PhotoContext";

const PHOTO_URL = "/photos.json";

const PhotoProvider = ({ children }) => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(PHOTO_URL);
      const data = await res.json();
      console.log(data);
      setImagenes(data.photos);
    };

    getData();
  }, []);

  const value = {
    imagenes,
    setImagenes,
  };
  return (
    <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
  );
};

export default PhotoProvider;
