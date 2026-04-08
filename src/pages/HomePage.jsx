import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from 'axios'

function HomePage(){
    const [books,setBooks] = useState([])
    const fetchBooks = async ()=>{
      const response = await  axios.get(" http://localhost:4949/api/books")
      setBooks(response.data.datas)
    }
    useEffect(()=>{
        fetchBooks()
    }, [])

    console.log(books, "this is a list of books")
    return(
        <>
<Navbar />
<div className="flex flex-wrap">
{
    books.map(function(book){
        return(
            <Card book={book} />
        )

    })
}
</div>

</>
    )
}

export default HomePage;