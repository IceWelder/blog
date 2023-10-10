"use client";
import { useState } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState<string[]>([]);
  const [newPost, setNewPost] = useState<string>("");
  const [editPostIndex, setEditPostIndex] = useState<number | null>(null);

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      if (editPostIndex !== null) {
        const updatedPosts = [...posts];
        updatedPosts[editPostIndex] = newPost;
        setPosts(updatedPosts);
        setEditPostIndex(null);
      } else {
        setPosts([...posts, newPost]);
      }
      setNewPost("");
    }
  };

  const handlePostDelete = (index: number) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const handlePostEdit = (index: number) => {
    setNewPost(posts[index]);
    setEditPostIndex(index);
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 p-4 flex">
      <div className="w-1/4 pr-4">
        <div className="p-4 border rounded bg-gray-600 text-white h-screen">
          <h1 className="text-2xl font-semibold mb-2">Fóruns</h1>
          <ul className="space-y-2">
            <li className="text-black border-b border-green-600 p-2 hover:bg-blue-500 transition duration-300">
              Fórum 1
            </li>
            <li className="text-black border-b border-green-600 p-2 hover:bg-blue-500 transition duration-300">
              Fórum 2
            </li>
            <li className="text-black border-b border-green-600 p-2 hover:bg-blue-500 transition duration-300">
              Fórum 3
            </li>
            <li className="text-black border-b border-green-600 p-2 hover:bg-blue-500 transition duration-300">
              Fórum 4
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Escreva sua postagem..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          ></textarea>
          <div className="mt-2">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-blue-400"
              onClick={handlePostSubmit}
            >
              {editPostIndex !== null ? "Editar Postagem" : "Criar Postagem"}
            </button>
          </div>
        </div>
        <div>
          {posts.map((post, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg">
              <p>{post}</p>
              <div className="mt-2">
                <button
                  className="px-2 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 mr-2"
                  onClick={() => handlePostEdit(index)}
                >
                  Editar
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  onClick={() => handlePostDelete(index)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/4 pl-4">
        <div className="p-7 border rounded bg-gray-500 text-white">
          <h2 className="text-2xl font-bold mb-4">Trending Topics </h2>

          <ul>
            <li className="mb-2 text-white-600">TOP 1</li>
            <li className="mb-2 text-white-600">TOP 2</li>
            <li className="mb-2 text-white-600">TOP 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
