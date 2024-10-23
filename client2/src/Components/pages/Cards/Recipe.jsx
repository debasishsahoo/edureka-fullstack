
const Recipe = (props) => {
  return (
    <div className="recipe-card">
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.info}</p>
      <a href="#">View Recipe</a>
    </div>
  );
};



export default Recipe;
