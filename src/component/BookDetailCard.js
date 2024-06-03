import React, { useEffect, useState } from 'react';
import { Chip } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Comment from './Comment';

export const BookDetailCard = () => {
    const { bookId } = useParams();
    const { bookData, status } = useSelector((state) => state.book);
    const isBookExist = bookData.find((ele) => ele._id === bookId);
    const {user, token}  = useSelector((state) => state.auth);
    const [review, setReview] = useState([]);

    console.log(user, token)

    const getComment = async () => {
        try {
            const res = await axios.get(`https://book-reviews-dc20.onrender.com/api/getreview/${bookId}`, {
                headers: {
                    Authorization: token
                }
            });
            setReview(res?.data);
        } catch (error) {
            console.log(error);
        }
    };
    

    useEffect(() => {
        getComment();
    }, [])

    return (
        <>
            <div className="max-w-2xl mx-auto p-6 bg-white  rounded-lg mt-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-60 h-64 flex-shrink-0">
                        <img
                            src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg"
                            alt="Book Cover"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="mt-6 md:mt-0 md:ml-6 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">{isBookExist?.title}</h2>
                            <p className="text-xl text-gray-600 mt-2">by {isBookExist?.author}</p>
                            <p className="mt-4 text-gray-700">{isBookExist?.description}</p>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <Chip label={`${isBookExist?.averageRating} ⭐`} className="text-lg bg-blue-500 text-white" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto mt-10 bg-white rounded-lg ">
                {review?.map((comment, index) => (
                    <Comment
                        key={index}
                        username={comment?.username}
                        comment={comment?.comment}
                        rating={comment?.rating}
                    />
                ))}
            </div>
        </>
    );
};
