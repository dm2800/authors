import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const EditAuthor = (props) => {

    const[errors, setErrors] = useState({});
    const [authorName, setAuthorName] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();


    console.log("Printing id:", id);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=> { 
            console.log("Printing id:", id);
            console.log(res.data);
            setAuthorName(res.data.authorName);
        })
        .catch((err)=>{
            console.log(err);
            navigate('/error');
        })
    },[])

    const updateSubmitHandler = (e)=> {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, 
        {authorName}
        )
        .then((res)=> {
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=> {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }

    return(
        <div>
            <form onSubmit={updateSubmitHandler}>
            <Header
            titleText={"Edit Author:"}
            link={"/"}
            linkText={"Home"}
            />

                <label>Name:</label>
                <input onChange={(e)=> setAuthorName(e.target.value)} type ="text" name="authorName" value={authorName}/>

                {
                    errors.authorName ?
                    <span>{errors.authorName.message}</span>
                    :null
                }

                <button>Submit</button>
                <button onClick={(e)=> navigate("/")}>Cancel</button>
            </form>
        </div>
    )

}

export default EditAuthor;