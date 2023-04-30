import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import EditorsInside from "../EditorsInside/EditorsInside";

const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, category_id } = news;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/categories/${category_id}`}>
            <Button variant="primary">
              <BiArrowBack /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInside />
    </div>
  );
};

export default News;
