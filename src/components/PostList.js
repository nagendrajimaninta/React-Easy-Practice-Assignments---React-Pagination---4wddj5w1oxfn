import React from "react";
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/fetchPosts";
import { PaginationButtonsList } from "./PaginationButtonsList";
import { Post } from "./Post";
export const pagevalue = React.createContext();
const PostList = () => {
  const [arr, setArr] = useState([]);
  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      if (arr.length == 0) {
        setActive(true);
      }
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pages}&_limit=5`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setArr(data);
      if(arr.length==0){
        setActive(false)
    }
    };
    fetchdata();
  }, [pages]);
  console.log(arr);

  return (
    <div>
      {arr.map((elem) => {
        return <Post title={elem.title} />;
      })}
      <div>
        {active ? <h1 id="loader">loading</h1> : ""}
        <div className="btn2">
          <PaginationButtonsList pages={pages} setPages={setPages} />
        </div>
      </div>
    </div>
  );
};

export { PostList };
