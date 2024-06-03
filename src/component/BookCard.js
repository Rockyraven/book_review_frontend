import React from "react"
import { Chip } from "@mui/material";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

export const BookCard = ({ title, author, rating, reviews, description, _id }) => {
    const {user}  = useSelector((state) => state.auth);

    return (
        <>

            <Link to={ user ?  `/bookdetail/${_id}` : "/login"} >
                <div class="book read" key={_id}>
                    <div class="cover">
                        <img src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg" />
                    </div>
                    <div class="description flex">
                        <div>
                            <p class="title">{title}</p>
                            <p class="author">{author}</p>
                        </div>
                        <div className="ms-auto mt-4 text-lg"><Chip label={rating + "⭐"} /></div>
                    </div>
                </div>
            </Link>
        </>
    )
}