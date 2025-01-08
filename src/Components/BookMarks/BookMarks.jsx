import BookMark from "../../BookMark/BookMark";


const BookMarks = ({bookMarks}) => {
    return (
        <div className="w-1/3">
            <h2>bookmarks : {bookMarks.length}</h2>


            {
                bookMarks.map((bookMark,idx)=><BookMark key={idx} bookMark={bookMark}></BookMark>)
            }
    
        </div>
    );
};

export default BookMarks;