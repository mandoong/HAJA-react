// import React, { useState } from "react";

// const predefinedTags = [
//   "자기소개",
//   "첫인사",
//   "팀원모집",
//   "문의사항",
//   "도움요청",
//   "기술고민",
//   "업적공유",
// ];

// export default function TagsDropdown({ selectedTags, setSelectedTags }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const selectTag = (tag) => {
//     if (!selectedTags.includes(tag)) {
//       setSelectedTags([...selectedTags, tag]);
//     }
//     setDropdownOpen(false);
//   };

//   const removeTag = (tag) => {
//     setSelectedTags(selectedTags.filter((t) => t !== tag));
//   };

//   return (
//     <div>
//       <div className="relative">
//         <div className="border p-2" onClick={toggleDropdown}>
//           {selectedTags.length > 0 ? (
//             selectedTags.map((tag, index) => (
//               <div
//                 key={tag}
//                 className="inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2"
//               >
//                 #{tag}
//                 <button
//                   type="button"
//                   className="ml-2 text-red-600"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     removeTag(tag);
//                   }}
//                 >
//                   &times;
//                 </button>
//               </div>
//             ))
//           ) : (
//             <span>태그를 선택해 주세요.</span>
//           )}
//         </div>
//         {dropdownOpen && (
//           <div className="absolute border bg-white z-10 mt-2 w-full">
//             {predefinedTags.map((tag) => (
//               <div
//                 key={tag}
//                 className="p-2 cursor-pointer hover:bg-gray-200"
//                 onClick={() => selectTag(tag)}
//               >
//                 #{tag}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
