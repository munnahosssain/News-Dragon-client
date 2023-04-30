import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://news-dragon-server.onrender.com/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  });

  return (
    <div>
      <h4>All categories</h4>
      <div className="ps-4">
        {categories.map(category => (
          <div key={category.id}>
            <Link to={`/categories/${category.id}`} className="text-black">
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
