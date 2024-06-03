import { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { LandingPage } from './pages/LangingPage';
import { Route, Routes } from 'react-router-dom';
import { BookDetailPage } from './pages/BookDetailPage';
import { BookDetailCard } from './component/BookDetailCard';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {

  
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    <Routes >
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/bookdetail' element={<BookDetailPage/>} >
          <Route path=":bookId" element={<BookDetailCard />} />
        </Route>
    </Routes>
    
        </>
  );
}

export default App;
