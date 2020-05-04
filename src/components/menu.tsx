import React from "react";
import {Link} from "react-router-dom";

const Menu = () => (
  <div>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/blog">Blog</Link>
    </p>
  </div>
);

export default Menu;
