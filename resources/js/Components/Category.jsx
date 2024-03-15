import React from 'react'

const Category = ({Category}) => {
  return (
    <div className="p-5 flex space-x-2">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a83dff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
        </svg>
        <div className="flex-1">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-gray-800">{category.user.name}</span>
                    <small className="ml-2 text-sm text-gray-600">{new Date(category.created_at).toLocaleString()}</small>
                </div>
                <div className="">
                    <p className="mt-4 text-lg text-white">{category.title}</p>
                    <p className="mt-4 text-lg text-white">{category.body}</p>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Category