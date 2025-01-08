import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  const handleMarkAsRead = (id,time) => {
    const readingTimeSum = readingTime + time;
    setReadingTime(readingTimeSum);

    // remove the read blog from bookMark
    // console.log(id)

    const remainingBookmarks=bookMarks.filter(bookMark=>bookMark.id !==id)
    setBookMarks(remainingBookmarks)


  };

  return (
    <>
      <Header></Header>
      <div className="flex ">
        <Blogs
          handleBookMark={handleBookMark}
          handleMarkAsRead={handleMarkAsRead}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <div>
          <BookMarks
            bookMarks={bookMarks}
            readingTime={readingTime}
          ></BookMarks>
        </div>
      </div>
    </>
  );
}

export default App;
