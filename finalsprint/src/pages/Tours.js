import { useState } from "react";
import { Users, Posts } from "../Data";
import img1 from "../assets/boats/download-1.jpg";
import img2 from "../assets/boats/download-2.jpg";
import img3 from "../assets/boats/download-3.jpg";
import img4 from "../assets/boats/download-4.jpg";
import img5 from "../assets/boats/download-5.jpg";
import img6 from "../assets/boats/heart.png";
import img7 from "../assets/boats/like.png";

export default function Post() {
  let post = Posts[0];
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="post">
              <div className="postWrapper">
                <div className="postTop">
                  <div className="postTopLeft">
                    <img className="postProfileImg" src={img1} alt="" />
                    <span className="postUsername">
                      {Users.filter((u) => u.id === post?.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                  </div>
                  <div className="postTopRight">{}</div>
                </div>
                <div className="postCenter">
                  <span className="postText">{post?.desc}</span>
                  <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                  <div className="postBottomLeft">
                    <img
                      className="likeIcon"
                      src={img7}
                      onClick={likeHandler}
                      alt=""
                    />
                    <img
                      className="likeIcon"
                      src={img6}
                      onClick={likeHandler}
                      alt=""
                    />
                    <span className="postLikeCounter">
                      {like} people like it
                    </span>
                  </div>
                  <div className="postBottomRight">
                    <span className="postCommentText">
                      {post.comment} comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="post">
              <div className="postWrapper">
                <div className="postTop">
                  <div className="postTopLeft">
                    <img className="postProfileImg" src={img2} alt="" />
                    <span className="postUsername">{Users[1].username}</span>
                    <span className="postDate">{post.date}</span>
                  </div>
                  <div className="postTopRight">{}</div>
                </div>
                <div className="postCenter">
                  <span className="postText">{Posts[1].desc}</span>
                  <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                  <div className="postBottomLeft">
                    <img
                      className="likeIcon"
                      src={img7}
                      onClick={likeHandler}
                      alt=""
                    />
                    <img
                      className="likeIcon"
                      src={img6}
                      onClick={likeHandler}
                      alt=""
                    />
                    <span className="postLikeCounter">
                      {like} people like it
                    </span>
                  </div>
                  <div className="postBottomRight">
                    <span className="postCommentText">
                      {post.comment} comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                  <img className="postProfileImg" src={img3} alt="" />
                  <span className="postUsername">{Users[2].username}</span>
                  <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">{}</div>
              </div>
              <div className="postCenter">
                <span className="postText">{Posts[2].desc}</span>
                <img className="postImg" src={post.photo} alt="" />
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  <img
                    className="likeIcon"
                    src={img7}
                    onClick={likeHandler}
                    alt=""
                  />
                  <img
                    className="likeIcon"
                    src={img6}
                    onClick={likeHandler}
                    alt=""
                  />
                  <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                  <span className="postCommentText">
                    {post.comment} comments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img className="postProfileImg" src={img4} alt="" />
                <span className="postUsername">{Users[3].username}</span>
                <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">{}</div>
            </div>
            <div className="postCenter">
              <span className="postText">{Posts[3].desc}</span>
              <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  src={img7}
                  onClick={likeHandler}
                  alt=""
                />
                <img
                  className="likeIcon"
                  src={img6}
                  onClick={likeHandler}
                  alt=""
                />
                <span className="postLikeCounter">{like} people like it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={img5} alt="" />
              <span className="postUsername">{Users[4].username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">{}</div>
          </div>
          <div className="postCenter">
            <span className="postText">{Posts[4].desc}</span>
            <img className="postImg" src={post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src={img7}
                onClick={likeHandler}
                alt=""
              />
              <img
                className="likeIcon"
                src={img6}
                onClick={likeHandler}
                alt=""
              />
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
