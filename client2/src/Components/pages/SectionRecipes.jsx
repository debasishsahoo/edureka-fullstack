import Recipe from "./Cards/Recipe";

const SectionRecipes = () => {
  return (
    <section className="Recipes">
      <h1 style={{"textAlign": "center"}}>
        <u>Featured Recipes</u>
      </h1>
      <div className="recipe-section">
        <Recipe
          image="../assets/images/dish-1.jpg"
          title="Strawberry Custard"
          info="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </div>
    </section>
  );
};

export default SectionRecipes;
