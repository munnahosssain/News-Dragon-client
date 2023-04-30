import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, author, image_url, title, details, ratings, total_view } = news;

  return (
    <Card className="my-4">
      <Card.Header>
        <div className="d-flex">
          <Image style={{ height: "3rem" }} src={author?.img} roundedCircle />
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>{moment(author?.published_date).format("YYYY-MMM-DD")}</p>
          </div>
          <div>
            <FaRegBookmark className="mx-2" />
            <BsShare />
          </div>
        </div>
      </Card.Header>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 249)} . . .{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1 d-flex align-items-center">
          <Rating
            readonly
            placeholderRating={ratings?.number}
            emptySymbol={<FaRegStar className="text-warning" />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar className="text-warning" />}
          />
          <span> {ratings?.number}</span>
        </div>
        <div>
          <BiShow />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
