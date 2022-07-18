import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import Header from './Header';


const OneAuthor = (props) => {

    const [author, setAuthor] = useState({});

    const{id} = useParams();

    const navigate = useNavigate();


    useEffect(()=> {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setAuthor(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])

    const deleteAuthor = ()=> {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=> console.log(err))
    }

    return(
        <div>


            <Header
            titleText={author.authorName}
            link={"/new"}
            linkText={"Add An Author"}
            />

            <button onClick={deleteAuthor}>
                Delete {author.authorName}
            </button>

        </div>
    )
}
export default OneAuthor;