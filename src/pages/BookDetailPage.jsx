import { Outlet, useParams } from "react-router-dom"
import ReviewForm from "../component/ReviewForm"


export const BookDetailPage = () => {
  const { bookId } = useParams();
  // console.log(bookId);

  return (
    <>
      <Outlet />

      <ReviewForm bookId={bookId}/>



    </>

  )
}