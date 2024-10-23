

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">Delicious Recipe</h1>
        <nav>
          <div className="menu-icon">&#9776;</div>
          <ul className="nav-list">
            <li>Home</li>
            <li>About</li>
            <li>Recipes</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
