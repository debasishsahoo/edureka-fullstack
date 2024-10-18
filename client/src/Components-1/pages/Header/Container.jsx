import React from "react";

const Container = () => {
  return (
    <>
      <div
        className="orbit"
        role="region"
        aria-label="Favorite Space Pictures"
        data-orbit
      >
        <ul className="orbit-container">
          <button className="orbit-previous" aria-label="previous">
            <span className="show-for-sr">Previous Slide</span>&#9664;
          </button>
          <button className="orbit-next" aria-label="next">
            <span className="show-for-sr">Next Slide</span>&#9654;
          </button>
          <li className="orbit-slide is-active">
            <img src="https://via.placeholder.com/2000x750" alt="" />
          </li>
          <li className="orbit-slide">
            <img src="https://via.placeholder.com/2000x750" alt="" />
          </li>
          <li className="orbit-slide">
            <img src="https://via.placeholder.com/2000x750" alt="" />
          </li>
          <li className="orbit-slide">
            <img src="https://via.placeholder.com/2000x750" alt="" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Container;
