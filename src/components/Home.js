import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>React Redux POC Components</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gridview">GridView</Link>
          </li>
          <li>
            <Link to="/slider">Slider</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
