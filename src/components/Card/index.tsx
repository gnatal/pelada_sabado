import React from 'react';

export interface ICardProps {
  imageSrc: string;
  text: string;
  imageAlt: string;
  title: string;
  tags: Array<string>;
}

export default function Function({
  imageSrc,
  imageAlt,
  text,
  title,
  tags = [],
}: ICardProps) {
  return (
    <div className='p-10'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-full' src={imageSrc} alt={imageAlt} />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{title}</div>
          <p className='text-gray-700 text-base'>{text}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          {tags.map((tag) => (
            <span
              key={`${tag}-${Math.random() * 1000}`}
              className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
