import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Images from "../components/Images";
import PostBar from "../components/PostBar";
import PostContainer from "../components/PostContainer";
// import "../css/profile.css";
import RelationshipModel from "../models/relationship";
import ImageModel from "../models/images";
import PetCardContainer from "../components/PetCardContainer";
import { Container, Row, Col } from "react-bootstrap";
// import PostContainer from "../components/PostContainer";
import Friends from "../components/Friends";

const Profile = () => {
  const [userId] = useState(localStorage.getItem("id"));
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [pets, setPets] = useState([]);
  const [userName, setUserName] = useState();

  const fetchUser = () => {
    RelationshipModel.one(userId).then((user) => {
      setPosts(user.user.posts);
      setUserName(`${user.user.firstName} ${user.user.lastName}`);
      for (let i = 0; i < 4; i++) {
        if (user.user.pets.length >= 1) {
          setPets((oldArray) => [...oldArray, user.user.pets[i]]);
        }
      }
    });
  };

  const fetchImages = () => {
    ImageModel.limit().then((imgData) => {
      setImages(imgData.images)
    })
  }


  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <Container fluid>
      <h1>Profile</h1>
      <Row className="img-wrapper">
        <Col sm={4} className="img-container">
          <Images
            imgClass="profile-preview-img"
            divClass="profile-preview-container"
            images={images}
          />
          <Link to="/allphotos">See All</Link>{" "}
          <Link to={"/uploadphotos"}>Upload Photos</Link>
        </Col>
        <Col className="profile-header">
          <PetCardContainer pets={pets} />
          <div className="pet-card-btns-container">
            <Link className="pets-btn" to="/allpets">
              {" "}
              See All Pets{" "}
            </Link>{" "}
            <Link className="pets-btn" to="/addpet">
              {" "}
              Add A Pet{" "}
            </Link>{" "}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="friends-container">
          <Friends />
        </Col>
      </Row>
      <div className="post-bar">

      <PostBar />

      </div>
      {posts.length ? (
        <PostContainer user={userName} posts={posts} />
      ) : (

          "Loading!"
        )}

    </Container>
  );
};

export default Profile;
