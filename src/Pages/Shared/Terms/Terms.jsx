import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde beatae
        veniam, eum accusantium tenetur voluptate dicta nisi corporis et.
      </p>
      <p>
        go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
