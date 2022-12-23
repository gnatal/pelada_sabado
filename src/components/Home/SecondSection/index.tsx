import React from 'react';
import Card from '../../Card';

export default function SecondSession() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 bg-gray-100 '>
      <Card
        imageAlt='Alt'
        imageSrc='/images/cat1.jpeg'
        text='a long card text'
        title='Card1'
        tags={['#tag1', '#tag1', '#tag1']}
      />
      <Card
        imageAlt='Alt'
        imageSrc='/images/cat2.jpeg'
        text='a long card text'
        title='Card1'
        tags={['#tag1', '#tag1', '#tag1']}
      />
      <Card
        imageAlt='Alt'
        imageSrc='/images/cat3.jpeg'
        text='a long card text'
        title='Card1'
        tags={['#tag1', '#tag1', '#tag1', '#tag1', '#tag1']}
      />
    </div>
  );
}
