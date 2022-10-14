import React from "react";
import { BookItems } from "./bookItems";

export class Books extends React.Component{
    render(){
        return this.props.books.map(
            (book)=>{
                //book identified by unique key - isbn
                return <BookItems book={book} key={book.isbn}></BookItems>
            }
        );

        
    }
}