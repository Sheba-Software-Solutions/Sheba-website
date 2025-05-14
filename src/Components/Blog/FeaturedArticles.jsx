import React from 'react'

// let Article = {
//   id: number,
//   title: string,
//   excerpt: string,
//   category: string,
//   date: string;
//   readTime: string;
//   image: string;
// };

export default function FeaturedArticles() {
  return (
    <>
        <div className="bg-gray-50" py-16>
            <div className="container mx-auto px-4">
                <h2 className='text-3xl md:text-4xl font-bold mb-2 text-techblog-darkBlue'>Featured Articles</h2>
                <p className="text-gray-600 mb-8">Discover our most popular and trending tech content</p>

            </div>

        </div>
    </>
  )
}
