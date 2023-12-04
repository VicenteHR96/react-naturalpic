import Gallery from "../components/Gallery";

const Favorites = () => {
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        <Gallery favFilter={true} />
      </div>
    </div>
  );
};
export default Favorites;
