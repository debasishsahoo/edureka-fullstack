const SectionHero = () => {
  return (
    <section className="hero">
      <div className="hero-section">
        <h2>welcome to our Recipe collection !</h2>
        <p>search mouth watering Recipes to satisfy your craving.</p>

        <form action="a" className="search-box">
          <input type="text" placeholder="Search Recipe" />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default SectionHero;
