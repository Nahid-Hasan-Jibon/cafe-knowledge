import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,handleBookMark,handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img className=" w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className=" ">
          <span>{reading_time} minute read</span>
          <button onClick={()=>handleBookMark(blog)}><CiBookmark></CiBookmark></button>
        </div>
      </div>
      <h2 className="text-xl">{title}</h2>
      <p>
        {
        hashtags.map((hash,idx) => (
          <span key={idx}>
            <br />
            <a href="">#{hash}</a>
          </span>
        ))
        }
      </p>
      <button onClick={()=>handleMarkAsRead(reading_time)}>Mark As Read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
