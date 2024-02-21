import { Suspense, useState } from "react";
import Comments from "./components/Comments";
import PostSelector from "./components/PostSelector";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const [selectedPost, setSelectedPost] = useState("");

  const handleSelectedPost = (e) => {
    setSelectedPost(e.target.value);
  };
  return (
    <div className="max-w-3xl flex flex-col justify-center mx-auto space-y-3 py-4">
      <h1 className="text-4xl font-semibold font-mono">
        React suspense and Error Boundaries
      </h1>
      <div className="space-y-4">
        <ErrorBoundary
          fallback={
            <h1 className="text-3xl font-semibold text-red-400">
              Error fetching posts .....
            </h1>
          }
        >
          <Suspense
            fallback={
              <h1 className="text-4xl font-semibold">Loading posts....</h1>
            }
          >
            <PostSelector onSelectPost={handleSelectedPost} />
          </Suspense>
        </ErrorBoundary>

        {selectedPost && (
          <ErrorBoundary
            fallback={
              <h1 className="text-4xl font-semibold">
                Error fetching commentss
              </h1>
            }
          >
            <Suspense
              fallback={
                <h1 className="text-4xl font-semibold">Loading comments....</h1>
              }
            >
              <Comments postId={selectedPost} />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
}

export default App;
