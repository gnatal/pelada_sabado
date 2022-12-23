import React from 'react';

interface IPost {
  date: Date;
  title: string;
  content: string;
  link: string;
  author: string;
  mainTag: string;
}

export default function PostCard({
  date,
  title,
  content,
  link,
  author,
  mainTag,
}: IPost) {
  return (
    <div className='max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md'>
      <div className='flex justify-between items-center'>
        <span data-testid='date' className='font-light text-gray-600'>{date.toDateString()}</span>
        <a className='px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500' href='!#'>{mainTag}</a>
      </div>
      <div className='mt-2'>
        <a data-testid='title' className='text-2xl text-gray-700 font-bold hover:underline' href='!#'>{title}</a>
        <p className='mt-2 text-gray-600'>{content}</p>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <a className='text-blue-500 hover:underline' href={link}>Read more</a>
        <div>
          <a className='flex items-center' href='!#'>
            <img className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block' src='https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80' alt='avatar' />
            <h1 className='text-gray-700 font-bold hover:underline'>{author}</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
