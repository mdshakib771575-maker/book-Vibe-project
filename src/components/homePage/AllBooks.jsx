import React, { use } from 'react';

const promiseData = fetch('/booksData.json').then(res => res.json());
const AllBooks = () => {
    const books =use(promiseData)
    console.log(books)
     return (
        <div className='my-12'>
            <h3 className='font-bold text-center'>Books</h3>
        </div>
    );
};

export default AllBooks;