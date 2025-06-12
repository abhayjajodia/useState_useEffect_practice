import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleMinus = () => {
    setCount(count - 1)
  }

  const [darkMode, setDarkMode] = useState(false)
  const handleToggle = () => {
    setDarkMode(!darkMode)
  }
  
  // useEffect(() => {
  //   let savedMode = localStorage.getItem('darkMode')
  //   if(!savedMode) {
  //     savedMode = 'light'
  //     setDarkMode(false)  
  //     localStorage.setItem('darkMode', savedMode)
  //   }
  //   setDarkMode(savedMode === 'dark' ? true : false)
  // }
  // , [])


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      

    } else {
      document.documentElement.classList.remove('dark')
      
    }
  }, [darkMode])
  
  return (

    <>
    <div className={`${darkMode ? 'dark' : ''}`}  >

      <div className="container mx-auto mt-10  dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl">
        <h1 className="text  dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
     
        </h1>
        <p className="text-slate-300 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste debitis consequatur aliquam harum placeat 
          impedit quae iusto, nulla, similique nihil nostrum nam ipsum, 
          repudiandae optio in error corporis porro?
        </p>
      </div>
      <label className="inline-flex items-center cursor-pointer">
    <input type="checkbox" id="check" className="sr-only peer" onChange={handleToggle}></input>
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
      peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 
      peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
      peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
      after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
      dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-green-600"></div>
    </label>
    </div>
      <div className={`${darkMode ? 'dark' : ''}`}  >

      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl">
        <h1 className="text dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
     
        </h1>
        <p className="text-slate-300 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste debitis consequatur aliquam harum placeat 
          impedit quae iusto, nulla, similique nihil nostrum nam ipsum, 
          repudiandae optio in error corporis porro?
        </p>
      </div>
      </div>
      <div className={`${darkMode ? 'dark' : ''}`}  >

      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl">
        <h1 className="text dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
     
        </h1>
        <p className="text-slate-300 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste debitis consequatur aliquam harum placeat 
          impedit quae iusto, nulla, similique nihil nostrum nam ipsum, 
          repudiandae optio in error corporis porro?
        </p>
      </div>
      </div>
      
      <div className={`${darkMode ? 'dark' : ''}`}  >

      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl">
        <h1 className="text dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
     
        </h1>
        <p className="text-slate-300 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste debitis consequatur aliquam harum placeat 
          impedit quae iusto, nulla, similique nihil nostrum nam ipsum, 
          repudiandae optio in error corporis porro?
        </p>
      </div>
      </div>
      
      <div className={`${darkMode ? 'dark' : ''}`}  >

      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl">
        <h1 className="text dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
     
        </h1>
        <p className="text-slate-300 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste debitis consequatur aliquam harum placeat 
          impedit quae iusto, nulla, similique nihil nostrum nam ipsum, 
          repudiandae optio in error corporis porro?
        </p>
      </div>
      </div>
      
      <div className={`${darkMode ? 'dark' : ''}`}  >

      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl">
        <h1 className="text dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
     
        </h1>
        <p className="text-slate-300 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste debitis consequatur aliquam harum placeat 
          impedit quae iusto, nulla, similique nihil nostrum nam ipsum, 
          repudiandae optio in error corporis porro?
        </p>
      </div>
      </div>
      
      <div className={`${darkMode ? 'dark' : ''}`}  >

      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl">
        <h1 className="text dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
     
        </h1>
        <p className="text-slate-300 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste debitis consequatur aliquam harum placeat 
          impedit quae iusto, nulla, similique nihil nostrum nam ipsum, 
          repudiandae optio in error corporis porro?
        </p>
      </div>
      </div>
      
      <div className={`${darkMode ? 'dark' : ''}`}  >

      <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow xl">
        <h1 className="text dark:text-white font-medium tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
     
        </h1>
        <p className="text-slate-300 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste debitis consequatur aliquam harum placeat 
          impedit quae iusto, nulla, similique nihil nostrum nam ipsum, 
          repudiandae optio in error corporis porro?
        </p>
      </div>
      </div>
      
      


    
    </>
  )
}

export default App;
