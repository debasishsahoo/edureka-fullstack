import React from "react";
import CustomHooks from "./CustomHooks";
const Index = () => {
  const [data] = CustomHooks("https://jsonplaceholder.typicode.com/todos");
  const [post] = CustomHooks("https://jsonplaceholder.typicode.com/posts");
  return (
    <>
      <div>
        <h1> All TODOS</h1>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </div>
      <hr />
      <biv>
      <h1> All POSTS</h1>
        {post &&
          post.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </biv>
    </>
  );
};

export default Index;
