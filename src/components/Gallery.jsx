import { useContext } from "react";
import { PhotoContext } from "../contexts/PhotoContext";
import IconHeart from "./IconHeart";

const Gallery = ({ favFilter }) => {
  const { imagenes, setImagenes } = useContext(PhotoContext);

  const fav = (id) => {
    const update = imagenes.map((item) => {
      if (id == item.id) item.liked = item.liked == true ? false : true;
      return item;
    });
    setImagenes(update);
  };

  return (
    <>
      {imagenes
        .filter((item) => {
          return favFilter ? item.liked : item;
        })
        .map((item) => (
          <div
            className="photo"
            key={item.id}
            style={{ backgroundImage: `url(${item.src.tiny})` }}
          >
            {window.location.href.includes("favoritos") ? null : (
              <>
                <span onClick={() => fav(item.id)} role="button">
                  <IconHeart filled={item.liked} />
                </span>
                <div className="description">{item.alt}</div>
              </>
            )}
          </div>
        ))}
    </>
  );
};

export default Gallery;
