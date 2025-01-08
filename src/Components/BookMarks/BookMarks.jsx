import BookMark from "../../BookMark/BookMark";


const BookMarks = ({bookMarks,readingTime}) => {
    return (
        <div className="w-1/3">
            <div>
                <h3 className="text-3xl"> Reading Time : {readingTime}</h3>
            </div>
            <h2>bookmarks : {bookMarks.length}</h2>


            {
                bookMarks.map((bookMark,idx)=><BookMark key={idx} bookMark={bookMark}></BookMark>)
            }
    
        </div>
    );
};

export default BookMarks;