import React, { use } from 'react';
import BookCard from "../../components/homePage/BookCard";


const promiseData = fetch('/booksData.json').then(res => res.json());
const AllBooks = () => {
    const books =use(promiseData)
    // console.log(books)
     return (
        <div className='my-12'>
            <h3 className='font-bold text-center'>Books</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
            {
                books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
            }
            </div>

        </div>
    );
};

export default AllBooks;