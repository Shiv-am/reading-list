import React, { createContext,useState } from "react"
import {v1 as uuid} from "uuid";
export const BookContext = createContext();

const BookContextProvider = (props) =>{
        const [books,setbooks] = useState([
            {title:"any book",author:"shivam",id:1},
            {title:"any book",author:"bansal",id:1}
        ])
        const addBook =(title,author)=>{
            setbooks([...books, {title,author,id: uuid()}])
        }
        const removeBook = (id) =>{
            setbooks(books.filter(book => book.id!== id))
        }
        return(
            <BookContextProvider value={{books,addBook,removeBook}}>
                {props.children}
            </BookContextProvider>
        )
}
export default BookContextProvider
