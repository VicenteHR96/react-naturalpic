import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <div className="gallery grid-columns-5 p-3">
        <Gallery />
      </div>
    </div>
  );
};
export default Home;
