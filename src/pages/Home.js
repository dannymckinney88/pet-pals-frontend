import React, { useState, useEffect } from "react";
import Images from "../components/Images";
import PostBar from "../components/PostBar";
import PostContainer from "../components/PostContainer";
import { Link } from "react-router-dom";
import "../css/home.css";
import PostModel from "../models/post";
import RelationshipModel from "../models/relationship";
import { Container, Row, Col } from "react-bootstrap";
import ImageModel from "../models/images"

const Home = (props) => {
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);
  // const [userId] = useState(localStorage.getItem("id"));

  // const fetchUser = () => {
  //   RelationshipModel.one(userId).then((user) => {
  //     setImages(user.user.images);
  //     console.log(user.user);
  //   });
  // };

  const fetchImages=() => {
    ImageModel.all().then((imgData)=>{
      setImages(imgData.images)
    })
  }

  const fetchPosts = () => {
    PostModel.all().then((postData) => {
      setPosts(postData.posts);
    });
  };

  useEffect( () => { fetchImages() },[])
  useEffect(() => {
    fetchPosts();
  }, []);
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <Container>
      <h1 className="h-heading">Welcome all Pet Owners</h1>
      <Row>
        <Col className="img-container">
          <Images
            images={images}
            imgClass="home-preview-img"
            divClass="home-preview-container"
          />
          {/* <Link to={"/uploadphotos"}>
            <button>Upload Photos</button>
          </Link> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <PostBar />
          {posts.length ? <PostContainer posts={posts} /> : "Loading!"}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
