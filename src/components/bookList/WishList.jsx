import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContexProvider';
import { FaRegStar } from 'react-icons/fa';

const WishList = () => {
     const { wishListBook } =  useContext(BookContext)
      if(wishListBook.length ===0 ){
       return <h2 className='text-3xl flex justify-center items-center bg-gray-200 p-20'>WishList Book is Empty !</h2>
    
     }
    return (
        <div>
            
             <p>WishListBook : {wishListBook.length}</p>
             <div className='grid grid-cols-3 gap-5'>
                             {
                                 wishListBook.map(book => <div key={book.bookId}>
                                      <div className="card bg-base-100 shadow-xl mt-2 border border-gray-300">
                         <div className='bg-gray-300 rounded-md'>
                             <figure className=' p-6'>
                                 <img src={book.image} alt={book.bookName} className='rounded-2xl h-60'/>
                             </figure>
                             </div>
                             <div className="card-body ">
                                    <div className='flex gap-2'>
                                     {
                                         book.tags.map((tag,index)=> <div key={index} className="badge bg-green-200 text-green-600 font-bold rounded-2xl">{tag}</div>)
                                     }
                                     </div>
                                 <h2 className="card-title text-2xl">
                                     {book.bookName}
                                 </h2>
                                 <p className='font-bold'>{book.author}</p>
                                 <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-500">
                                     <div className="">{book.category}</div>
                                     <div className="flex items-center gap-2">5.00 <FaRegStar /></div>
                                 </div>
                             </div> 
                          </div> 
                        
                                 </div>)
                             }
                             </div>
        </div>
    );
};

export default WishList;