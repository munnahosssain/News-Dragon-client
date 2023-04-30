import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryProducts = useLoaderData();

  return (
    <div>
      {id && <h1>This category news: {categoryProducts.length}</h1>}
      {categoryProducts.map(news => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
