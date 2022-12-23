import React from 'react';
import Categories from './Categories';
import Pagination from './Pagination';
import PostCard from './PostCard';
import RecentPosts from './RecentPosts';
import SideBar from './SideBar';
import SortSelect from './SortSelect';

export default function Posts() {
  return (
    <div>
      <div className='px-6 py-8'>
        <div className='flex justify-between container mx-auto'>
          <div className='w-full lg:w-8/12'>
            <div className='flex items-center justify-between'>
              <h1 data-testid='post-header' className='text-xl font-bold text-gray-700 md:text-2xl'>Post</h1>
              <SortSelect />
            </div>
            <div className='mt-6'>
              <PostCard date={new Date()} title='First post' content='lorem ipsum' author='Vanessa' mainTag='chatisse' link='1321' />
            </div>
            <div className='mt-8'>
              <Pagination />
            </div>
          </div>
          <div className='-mx-8 w-4/12 hidden lg:block'>
            <div className='px-8'>
              <h1 className='mb-4 text-xl font-bold text-gray-700'>Authors</h1>
              <SideBar />
            </div>
            <div className='mt-10 px-8'>
              <h1 className='mb-4 text-xl font-bold text-gray-700'>Categories</h1>
              <Categories />
            </div>
            <div className='mt-10 px-8'>
              <h1 className='mb-4 text-xl font-bold text-gray-700'>Recent Post</h1>
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
