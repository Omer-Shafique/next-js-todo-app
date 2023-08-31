
'use client'
import Image from 'next/image'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { useState } from 'react'





export default function Home() {

  const addTodo = () => {
    let todos = localStorage.getItem("todos")
    if (todos){
      let todosJson = JSON.parse(todos)
      if (todosJson.filter(value => {return value.title== todo.title}).length>0 )
      alert ("todo with this title already exist")
    
    
      else {  todosJson.push(todo)
      localStorage.setItem("todos" , JSON.stringify(todosJson))}
      alert ("todo added")
      setTodo({title:"" , desc: ""})
      
    }
    else {
      localStorage.setItem("todos" , JSON.stringify([todo]))
    }
   }

  const onChange = (e) => {
      setTodo({...todo , [e.target.name]: e.target.value})
      console.log(todo)
  }
  const [todo , setTodo] =useState({title:"" , desc: ""})

  return (
    <>
    <Header/>
    <div>
    </div>

    
    <div className="container mx-auto min-h-screen ">
    <div className='my-2 font-semibold text-3xl'>

    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
    {/* <h1 className="my-4 text-black"></h1> */}
    <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add A Todo</h2>
      <div className="relative mb-4">
        <label htmlFor="title-name" className="leading-7 text-sm text-gray-600">Todo Title</label>
        <input onChange={onChange} value={todo.title} type="text" id="title" name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="desc" className="leading-7 text-sm text-gray-600">Todo Text </label>
        <input  onChange={onChange} value={todo.desc} type="text" id="desc" name="desc" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={addTodo} className="w-fit  text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Add Todo</button>
      <p className="text-xs text-gray-500 mt-3">my first next.js project</p>
    </div>
    </div>
</section>

   </div>
      </div>
      {/* <Compon<Header/>ent {...pageProps}/> */}
      <Footer/>
   
   </>
  )
}
