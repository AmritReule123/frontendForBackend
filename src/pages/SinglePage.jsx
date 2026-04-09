

// import { useNavigate, useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// import { useEffect, useState } from "react";

// function SinglePage() {
//     const navigate = useNavigate({})
//     const { id } = useParams(); 
//     const [book, setBook] = useState({});
    
//     const fetchBook = async () => {
//         try {
//             const response = await axios.get("http://localhost:4949/api/books/" + id);
//             // This is the missing piece! 
//             setBook(response.data.datas); 
//         } 


//             useEffect(() => {
//         fetchBook()
//     }, [])

//     //     catch (error) {
//     //         console.error("Error fetching the book:", error);
//     //     }
//     // };



//     const deleteBook = async ()=>{
//         const response = await axios.delete("http://localhost:4949/api/books/" + id)
//         console.log(response)
//         if(response.status == 200){

//             //home page maa navigation gardem
//             navigate("/")
//         }else{
//             alert("Something went wrong!")
//         }
//     }

//     return (
//         <>
//             <Navbar />
//             <h1>{book.bookName}</h1>
//             <p>{book.bookAuthor}</p>
//             {/* Double check if it's 'bookPrice' or just 'price' in your API */}
//             <p>{book.bookPrice || book.price}</p>
//             <button onClick={deleteBook}>Delete Mee</button>
//         </>
//     );
// }

// export default SinglePage;

import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function SinglePage() {
    const navigate = useNavigate(); // Removed the ({})
    const { id } = useParams(); 
    const [book, setBook] = useState({});
    
    // 1. fetchBook function lai proper block ma rakhne
    const fetchBook = async () => {
        try {
            const response = await axios.get("http://localhost:4949/api/books/" + id);
            setBook(response.data.datas); 
        } catch (error) {
            console.error("Error fetching the book:", error);
        }
    };

    // 2. useEffect humesha function bhanda bahira hunuparchha
    useEffect(() => {
        fetchBook();
    }, []);

    const deleteBook = async () => {
        try {
            const response = await axios.delete("http://localhost:4949/api/books/" + id);
            console.log(response);
            if(response.status === 200) {
                navigate("/"); // Success vaye pachi Home page jane
            } else {
                alert("Something went wrong!");
            }
        } catch (error) {
            alert("Delete garda error ayo!");
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <h1>{book.bookName}</h1>
            <p>{book.bookAuthor}</p>
            <p>{book.bookPrice || book.price}</p>
            <button onClick={deleteBook}>Delete Mee</button>
        </>
    );
}

export default SinglePage;