import React, { createContext,useState } from "react"
import uuid from 'uuid/v1'
export const BookContext = createContext();

const BookContextProvider = (props) =>{
        const [books,setbooks] = useState([
            {title:"any book",author:"shivam",id:1},
            {title:"any book",author:"bansal",id:1}
        ])
        const addBook =(title,auhtor)=>{
            setbooks([...books, {title,author,id: uuid()}])
        }
        const removeBook = (id) =>{
            setbooks(books.filter(book => book.id!== id))
        }
        return(
            <BookContextProvider>
                {props.children}
            </BookContextProvider>
        )
}
export default BookContextProvider
