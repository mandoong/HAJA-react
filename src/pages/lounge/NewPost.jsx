import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const tagChangeHandler = (event) => {
    const { value } = event.target;
    if (!tags.includes(value) && tags.length < 3) {
      setTags([...tags, value]);
    }
  };

  const tagRemoveHandler = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const postSubmitHandler = () => {
    // 등록 로직
  };

  const saveDraftHandler = () => {
    // 임시 저장 로직
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <input
        type="text"
        placeholder="제목을 입력하세요. 최대 30자, 미입력시 본문사용)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={30}
        className="w-full p-2 border rounded mb-4"
      />
      <input
        type="text"
        placeholder="태그를 선택해주세요."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            tagChangeHandler(e);
            e.target.value = "";
          }
        }}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="flex flex-wrap gap-2 mb-4">
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
      </div>
      <textarea
        placeholder="내용을 입력하세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        rows="10"
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
  );
}
