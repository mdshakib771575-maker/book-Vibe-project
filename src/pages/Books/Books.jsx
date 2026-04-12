import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContexProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WishList from '../../components/bookList/WishList';
import ReadListBook from '../../components/bookList/ReadListBook';

const Book = () => {
    
    
    const { readListBook, } =  useContext(BookContext)
    console.log(readListBook)
    return (
        <div className='w-6xl mx-auto'>
           <h2>Books</h2>
           <Tabs>
    <TabList>
      <Tab>ReadListBook</Tab>
      <Tab>WishListBook</Tab>
    </TabList>

    <TabPanel>
      <ReadListBook></ReadListBook>
    </TabPanel>
    <TabPanel>
      <WishList></WishList>
    </TabPanel>
  </Tabs>
          
        </div>
    );
};

export default Book;