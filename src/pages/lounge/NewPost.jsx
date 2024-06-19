import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../../utils/repository";

export default function NewPost() {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    tags: ["임시태그"],
  });

  const navigate = useNavigate();

  const newPostChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  // const tagChangeHandler = (event) => {
  //   const { value } = event.target;
  //   if (!tags.includes(value) && tags.length < 3) {
  //     setTags([...tags, value]);
  //   }
  // };

  // const tagRemoveHandler = (tagToRemove) => {
  //   setTags(tags.filter((tag) => tag !== tagToRemove));
  // };

  const postSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log(newPost);
      const response = await Post.addPost(newPost);
      console.log(response);
      if (response === 200) {
        console.log("게시글 등록 성공");
        navigate("/lounge");
      }
    } catch (err) {
      console.error("게시글 등록 실패", err);
    }
  };

  const saveDraftHandler = () => {
    // 임시 저장 로직
  };

  return (
    <form onSubmit={postSubmitHandler} className="max-w-xl mx-auto p-4">
      <div className="max-w-3xl mx-auto p-6">
        <input
          id="content"
          type="text"
          name="title"
          placeholder="제목을 입력하세요. 최대 30자, 미입력시 본문사용)"
          value={newPost.title}
          onChange={newPostChangeHandler}
          maxLength={30}
          className="w-full p-2 border rounded mb-4"
        />
        {/* <input
      type="text"
      placeholder="태그를 선택해주세요."
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          tagChangeHandler(e);
          e.target.value = "";
        }
      }}
      className="w-full p-2 border rounded mb-4"
    /> */}
        {/* <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <div
          key={tag}
          className="flex items-center bg-gray-200 rounded-full px-3 py-1"
        >
          #{tag}
          <button
            type="button"
            className="ml-2 text-red-600"
            onClick={() => tagRemoveHandler(tag)}
          >
            x
          </button>
        </div>
      ))}
    </div> */}
        <textarea
          id="content"
          name="content"
          value={newPost.content}
          placeholder="내용을 입력하세요."
          onChange={newPostChangeHandler}
          className="w-full p-2 border rounded mb-4"
          rows="10"
          required
        />
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
            onClick={() => navigate("/lounge")}
          >
            취소
          </button>

          <button
            type="button"
            className="bg-orange-400 text-white px-4 py-2 rounded"
            onClick={postSubmitHandler}
          >
            등록
          </button>
        </div>
      </div>
    </form>
  );
}
