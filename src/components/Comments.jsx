import { useEffect, useState } from "react";
import { fetchData } from "../utils/data";
import use from "../hooks/use";

export default function Comments({ postId }) {
  const comments = use(
    fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  );
  return (
    <div>
      <h2 className="text-2xl font-semibold font-mono">Comments:</h2>
      <ul className="list-disc px-2 font-mono">
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
}
