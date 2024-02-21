import fetchPosts from "../api/fetchPosts";

const resource = fetchPosts(
  "https://jsonplaceholder.typicode.com/posts?_limit=25"
); //return a promise

export default function PostSelector({ onSelectPost }) {
  const posts = resource.read();
  return (
    <div>
      <select onChange={onSelectPost} className="font-mono p-1">
        <option value="">Select post</option>
        {posts.length &&
          posts.map((post) => (
            <option key={post.id} value={post.id}>
              {post.title}
            </option>
          ))}
      </select>
    </div>
  );
}
