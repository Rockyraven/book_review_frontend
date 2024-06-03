import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const ReviewForm = ({bookId}) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [loading, setLoading] = useState(false);
  const {token}  = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating < 1 || rating > 5) {
      toast.error("Rating must be between 1 and 5");
      return;
    }

    setLoading(true);
    console.log( comment,
      rating, bookId)
    try {
      const response = await axios.post(`http://localhost:5000/api/review/${bookId}`, {
        comment,
        rating,
      }, {
        headers: {
            Authorization: token
        }
    });
      console.log(response, );
      setComment('');
      setRating('');
      
    } catch (error) {
      console.error('Error submitting review:', error);
      toast.error("Error submitting review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white  rounded-lg p-8 mt-5">
      <h2 className="text-2xl font-bold mb-4">Submit a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="comment">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
