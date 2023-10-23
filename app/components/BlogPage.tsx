"use client"
import Link from 'next/link';
import React, { useState } from "react";

type Post = string;

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
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
    <div className="max-w-6xl mx-auto mt-8 p-4 flex flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/4 pr-4">
        <div className="p-4 border rounded bg-gray-600 text-white h-screen">
          <h1 className="text-2xl font-semibold mb-2">Fóruns</h1>
          <ul className="space-y-2">
            <Link href="#">
              <li className="text-white border-b border-blue-600 p-2 hover:bg-gray-500 transition duration-300">
                Fórum 1
              </li>
            </Link>
            <Link href="#">
              <li className="text-white border-b border-blue-600 p-2 hover:bg-gray-500 transition duration-300">
                Fórum 1
              </li>
            </Link>
            <Link href="#">
              <li className="text-white border-b border-blue-600 p-2 hover:bg-gray-500 transition duration-300">
                Fórum 1
              </li>
            </Link>
            <Link href="#">
              <li className="text-white border-b border-blue-600 p-2 hover:bg-gray-500 transition duration-300">
                Fórum 1
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Escreva sua postagem..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          ></textarea>
          <div className="mt-2">
            <button
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400"
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
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 pl-4 trending-section">
        <div className="p-7 border rounded bg-gray-500 text-white">
          <h2 className="text-2xl font-bold mb-4">Trending Topics</h2>
          <ul>
          <Link href="#">
              <li className="text-white border-b space-y-2 border-blue-600 p-2 hover:bg-gray-300 transition duration-300">
                TOP 1
              </li>
            </Link>
            <Link href="#">
              <li className="text-white border-b space-y-2 border-blue-600 p-2 hover:bg-gray-300 transition duration-300">
                TOP 1
              </li>
            </Link>
            <Link href="#">
              <li className="text-white border-b space-y-2 border-blue-600 p-2 hover:bg-gray-300 transition duration-300">
                TOP 1
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
