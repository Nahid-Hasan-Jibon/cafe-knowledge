
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {

  const [bookMarks ,setBookMarks]=useState([]);

  const handleBookMark=(blog)=>{
    
    const newBookMarks=[...bookMarks,blog]
    setBookMarks(newBookMarks)
  }
  

  return (
    <>
      
      <Header></Header>
      <div className='flex '>
      <Blogs handleBookMark={handleBookMark}></Blogs>
      <div>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
      </div>
     
     
    </>
  )
}

export default App
