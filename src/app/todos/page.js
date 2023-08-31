"use client";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
// import HomeIcon from '@mui/icons-material/Home';
const Page = () => {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosFromLocalStorage = localStorage.getItem("todos");

    if (todosFromLocalStorage) {
      try {
        const parsedTodos = JSON.parse(todosFromLocalStorage);
        setTodos(parsedTodos);
      } catch (error) {
        console.error("Error parsing todos:", error);
      }
    }
  }, []);

  const deleteTodo = (title) => {
    const newTodos = todos.filter((item) => item.title !== title);
  setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos));
    
  };

  const editTodo = (title, newDescription) => {{
      const todoToUpdate = todos.find((item) => item.title === title);

      if (todoToUpdate) {
        todoToUpdate.desc = newDescription;
        setTodos([...todos]);
        localStorage.setItem("todos", JSON.stringify([...todos]));
      }
    };
  };

  return (
    <>
      <Header />
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
                Your Todos
              </h1>
              {todos.length == 0 && <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                
              You Can Add Todo From Home Page 
              </p>}
            </div>
            <div className="flex flex-wrap -m-4">
              {todos.map((item) => {
                return (
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src={`https://picsum.photos/400/800?=${item.title}`}
                      />
                      <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-gray-900">
                          {item.title}
                        </h2>
                        <p className="mb-4">{item.desc}</p>
                        <span className="inline-flex">
                          <a
                            className="ml-2 text-gray-500 cursor-pointer"
                            onClick={editTodo}
                          >
                            <svg
                              className="edit-icon"
                              fill="#fc2e05"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                              width="30px"
                              height="30px"
                            >
                              <path d="M 20.09375 0.25 C 19.5 0.246094 18.917969 0.457031 18.46875 0.90625 L 17.46875 1.9375 L 24.0625 8.5625 L 25.0625 7.53125 C 25.964844 6.628906 25.972656 5.164063 25.0625 4.25 L 21.75 0.9375 C 21.292969 0.480469 20.6875 0.253906 20.09375 0.25 Z M 16.34375 2.84375 L 14.78125 4.34375 L 21.65625 11.21875 L 23.25 9.75 Z M 13.78125 5.4375 L 2.96875 16.15625 C 2.71875 16.285156 2.539063 16.511719 2.46875 16.78125 L 0.15625 24.625 C 0.0507813 24.96875 0.144531 25.347656 0.398438 25.601563 C 0.652344 25.855469 1.03125 25.949219 1.375 25.84375 L 9.21875 23.53125 C 9.582031 23.476563 9.882813 23.222656 10 22.875 L 20.65625 12.3125 L 19.1875 10.84375 L 8.25 21.8125 L 3.84375 23.09375 L 2.90625 22.15625 L 4.25 17.5625 L 15.09375 6.75 Z M 16.15625 7.84375 L 5.1875 18.84375 L 6.78125 19.1875 L 7 20.65625 L 18 9.6875 Z" />
                            </svg>
                          </a>
                          <a
                            className="ml-2 text-gray-500 cursor-pointer{
                              "
                            onClick={() => deleteTodo(item.title) 
                            }
                            
                          >
                            <svg
                              className="delete-icon"
                              fill="#fc2e05"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                              width="20px"
                              height="20px"
                            >
                              <path d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 16.140625 6 C 14.303372 6 12.582924 6.9194511 11.564453 8.4492188 L 9.1972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 9.7636719 15 A 1.50015 1.50015 0 0 0 10.208984 15 L 36.330078 15 L 34.757812 29.679688 A 1.50015 1.50015 0 1 0 37.740234 29.998047 L 39.347656 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 38.802734 12 L 36.435547 8.4492188 C 35.416254 6.9202798 33.696001 6 31.859375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 16.140625 9 L 31.859375 9 C 32.696749 9 33.474746 9.4162203 33.939453 10.113281 L 35.197266 12 L 12.802734 12 L 14.060547 10.113281 A 1.50015 1.50015 0 0 0 14.0625 10.111328 C 14.525982 9.4151428 15.301878 9 16.140625 9 z M 10.572266 17.650391 A 1.50015 1.50015 0 0 0 9.1171875 19.330078 L 11.125 38.085938 C 11.423352 40.868277 13.795836 43 16.59375 43 L 31.404297 43 C 34.202211 43 36.574695 40.868277 36.873047 38.085938 L 37.246094 34.605469 A 1.50015 1.50015 0 1 0 34.263672 34.287109 L 33.890625 37.765625 C 33.752977 39.049286 32.694383 40 31.404297 40 L 16.59375 40 C 15.303664 40 14.247023 39.049286 14.109375 37.765625 L 12.099609 19.011719 A 1.50015 1.50015 0 0 0 10.572266 17.650391 z" />
                            </svg>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
