import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'; // Star icons for rating

const Comment = ({ username, comment, rating }) => {
  return (
    <div className="flex items-start space-x-3 p-3 border-b border-gray-200">
      <img
        src="https://static.vecteezy.com/system/resources/previews/003/715/527/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
        alt="profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <div>
          <span className="font-bold">{username}</span>
          <span className="ml-2">{rating} ⭐</span>
        </div>
        <div className="flex items-center mt-1">
          
          <span className="ml-2">{comment}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
