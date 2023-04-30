import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo, RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import { BsFacebook, BsSkype } from "react-icons/bs";
import QZone from "../QZone/QZone";
import bgImage from "../../../assets/bg.png";
import { AuthContext } from "../../../providers/AuthProvider";

const RightNav = () => {
  const googleSignIn = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const displayUser = result.user;
        console.log(displayUser);
      })
      .catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div>
        <h4>Login With</h4>
        <Button onSubmit={handleGoogleSignIn} variant="outline-success">
          <FcGoogle size={32} /> Google
        </Button>
        <br />
        <Button variant="outline-success my-2">
          <RxGithubLogo size={32} /> GitHub
        </Button>
        <br />
        <Button variant="outline-success w-full">
          <BsFacebook size={32} /> Facebook
        </Button>{" "}
        <br />
        <ListGroup>
          <ListGroup.Item>
            <Button variant="">
              <BsFacebook size={32} /> Facebook
            </Button>{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
      <ListGroup className="my-5">
        <ListGroup.Item>
          <BsFacebook size={20} /> Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <RxTwitterLogo className="my-2" size={20} /> Twitter
        </ListGroup.Item>
        <ListGroup.Item>
          <RxInstagramLogo size={20} /> InstaGram
        </ListGroup.Item>
        <ListGroup.Item>
          <BsSkype size={20} /> Skype
        </ListGroup.Item>
      </ListGroup>
      <div>
        <QZone />
      </div>
      <div className="mt-5">
        <img src={bgImage} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
