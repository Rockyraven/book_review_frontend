import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BookCard, bookCard } from "../component/BookCard";
import { FilterComponent } from "../component/FilterComponent";
import { fetchbookData } from "../redux/Slices/bookSlice";
import Loader from "../component/Loader";

export const LandingPage = () => {
  const [selectedRating, setSelectedRating] = useState("");
  const [searchString, setSearchString] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const { bookData, status } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchbookData());
  }, [dispatch]);



   
 
 


  function filterBooks(books) {
    let filteredBooks = [...books];

    //filter by ctc 
    if (selectedRating) {
      filteredBooks = filteredBooks.filter(book => book?.minExp <= selectedRating )
    }

    //searching 
    if (searchString) {
      filteredBooks = filteredBooks.filter(book => book?.title?.toLowerCase()?.includes(searchString?.toLowerCase()))
    }
    return filteredBooks;
  }


  return (
    <>
      <FilterComponent
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        setSearchString={setSearchString}
      />

      <div className="flex flex-wrap gap-5 justify-center">
        {filterBooks(bookData)?.map((item) => (
          <BookCard
            author={item?.author}
            title={item?.title}
            rating={item?.averageRating}
            _id={item?._id}
            description={item?.description}
            reviews={item?.reviews}
          />
        ))}
      </div>
      <div className="flex align-center justify-center">
        {status === "loading" || isLoading ? <Loader /> : null}
      </div>
    </>
  );
};
