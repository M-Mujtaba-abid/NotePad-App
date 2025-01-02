import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeToPAstes } from "../fetures/counter/pasteSlice";
import toast from "react-hot-toast";

const Paste= () => {
  const navigate = useNavigate();
  const pastes = useSelector((state) => state.paste.pates);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeToPAstes(pasteId));
    toast.success("Paste deleted successfully");
  };

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    toast.success("Content copied to clipboard");
  };

  const handleShare = (content) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share Paste",
          text: content,
        })
        .then(() => toast.success("Content shared successfully"))
        .catch(() => toast.error("Failed to share"));
    } else {
      toast.error("Sharing not supported on this device");
    }
  };

  return (
    <div className="flex flex-col items-center  w-[410px] lg:w-full bg-gray-50 min-h-screen px-6 py-8">
      <h1 className="text-3xl font-bold text-green-500 mb-6">My Pastes</h1>
      {/* Search Bar */}
      <input
        className="p-3 border rounded-lg w-full max-w-md focus:ring-2 focus:ring-blue-400 outline-none mb-6"
        type="text"
        placeholder="Search pastes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Pastes List */}
      <div className="w-full max-w-md space-y-6">
        {filterData.length > 0 ? (
          filterData.map((paste) => (
            <div
              key={paste.id}
              className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition duration-200"
            >
              {/* Title */}
              <h2 className="text-lg font-semibold text-green-500 mb-2">
                {paste.title}
              </h2>
              {/* Content */}
              <p className="text-gray-600 mb-4 line-clamp-3">{paste.content}</p>
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  className="py-1 px-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition duration-200"
                  onClick={() => handleDelete(paste.id)}
                >
                  Delete
                </button>
                <button
                  className="py-1 px-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition duration-200"
                  onClick={() => navigate(`/edit/${paste.id}`)}
                >
                  Edit
                </button>
                <button
                  className="py-1 px-3 bg-yellow-100 text-yellow-600 rounded-lg hover:bg-yellow-200 transition duration-200"
                  onClick={() => handleCopy(paste.content)}
                >
                  Copy
                </button>
                <button
                  className="py-1 px-3 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition duration-200"
                  onClick={() => navigate(`/paste/${paste.id}`)}
                >
                  View
                </button>
                <button
                  className="py-1 px-3 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition duration-200"
                  onClick={() => handleShare(paste.content)}
                >
                  Share
                </button>
              </div>
              {/* Date */}
              <p className="text-sm text-gray-400 mt-3">
                {paste.createdAt
                  ? new Date(paste.createdAt).toLocaleDateString()
                  : "No Date Available"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No pastes found.</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
