import { useState, useEffect } from "react"


function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/').then(res => res.json()).then(data => setBlogs(data))
    // effect
    // return () => {
    //   cleanup
    // };
  }, []);

  return (
    <>
      <div className='main-bg'>
        <h1>I guess i miss designing - The developer </h1>
        {!blogs ? <p>Loading</p> :
          blogs.slice(0, 6).map(myblog => (

            <div className="blog-body" key={myblog.div}>
              <h3>{myblog.title}</h3>
              <p>{myblog.body}</p>
            </div>

          ))
        }
      </div>
    </>
  )
}

export default App
