import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Info Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quae
        assumenda, tempore voluptatem in veritatis cumque nobis, minus ea error
        dolore delectus cupiditate. Id, esse.
      </p>
      <button className="btn" onClick={()=>history.push("/")}>Todo List</button>
    </>
  );
};
