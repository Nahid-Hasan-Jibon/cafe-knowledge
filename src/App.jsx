
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  

  return (
    <>
      
      <Header></Header>
      <div className='flex '>
      <Blogs></Blogs>
      <div>
        <BookMarks></BookMarks>
      </div>
      </div>
     
     
    </>
  )
}

export default App
