// src/components/Posts.jsx
import React, { useState } from "react";

// ข้อมูลเริ่มต้นของ Post
const initialPosts = [
  { id: 1, title: "Paper Clips", content: "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.", likes: 61 },
  { id: 2, title: "Born to Kill", content: "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.", likes: 46 },
  { id: 3, title: "Ten Shrews", content: "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.", likes: 50 },
  { id: 4, title: "Ciel est à vous", content: "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.", likes: 3 },
  { id: 5, title: "Tigger Movie", content: "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.", likes: 66 },
];

function Posts() {
  // ใช้ State เพื่อเก็บข้อมูลของ Post
  const [posts, setPosts] = useState(initialPosts);

  // ฟังก์ชันสำหรับเพิ่มจำนวน Like
  function handleLike(postId) {
    const updatedPosts = posts.map(function (post) {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 }; // เพิ่ม Like ทีละ 1
      }
      return post;
    });
    setPosts(updatedPosts); // อัปเดต State ด้วยข้อมูลใหม่
  }

  // ฟังก์ชันสำหรับลดจำนวน Like
  function handleDislike(postId) {
    const updatedPosts = posts.map(function (post) {
      if (post.id === postId && post.likes > 0) {
        return { ...post, likes: post.likes - 1 }; // ลด Like ทีละ 1
      }
      return post;
    });
    setPosts(updatedPosts); // อัปเดต State ด้วยข้อมูลใหม่
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {/* แสดงผลแต่ละ Post */}
        {posts.map(function (post) {
          return (
            <div key={post.id} className="post-item">
              <div className="post-header">
                <h2>{post.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{post.likes}</span>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={function () {
                    handleLike(post.id);
                  }}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={function () {
                    handleDislike(post.id);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
