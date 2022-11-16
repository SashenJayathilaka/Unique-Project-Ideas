import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Image, Icon, Label } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import MyPopup from "../utils/MyPopup";

function PostCard({ post }) {
  const [speed, setSpeed] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={`https://avatars.dicebear.com/api/avataaars/${speed}.svg`}
        />
        <Card.Header>{post.username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${post.id}`}>
          {moment(post.createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{post.body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton
          user={user}
          id={post.id}
          body={post.body}
          createdAt={post.createdAt}
          username={post.username}
          comments={post.comments}
          likes={post.likes}
          likeCount={post.likeCount}
          commentCount={post.commentCount}
        />
        <MyPopup content="comment">
          <Button labelPosition="right" as={Link} to={`/post/${post.id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {post.commentCount}
            </Label>
          </Button>
        </MyPopup>
        {user && user.username === post.username && (
          <DeleteButton postId={post.id} />
        )}
      </Card.Content>
    </Card>
  );
}

export default PostCard;
