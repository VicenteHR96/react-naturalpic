import { useEffect, useState } from "react";
import { PhotoContext } from "./PhotoContext";

const PHOTO_URL = "/photos.json";

const PhotoProvider = ({ children }) => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(PHOTO_URL);

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setImagenes(data.photos);
      } catch (error) {
        console.error("Error:", error.message);
      }
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
