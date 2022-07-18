import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const AllAuthors = (props) => {

    const [authorList, setAuthorList] = useState([]);

    const navigate = useNavigate();

    //Get All renders immediately with useEffect: 
    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors")
        .then((res)=> {
            console.log(res);
            console.log("this is the res data:", res.data);
            setAuthorList(res.data);
            console.log("this is authorlist:", authorList);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteHandler = (idFromBelow) =>{
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((res)=> {
                console.log(res.data);
                setAuthorList(authorList.filter((author)=> author._id !== idFromBelow))
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return (
        <div>

            <Header
            titleText={"Quotes By:"}
            link={"/new"}
            linkText={"Add An Author"}
            />


                <table style={{margin:"auto", border: "1px solid black"}}>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authorList?
    
                            authorList.map((author, index)=> (
                                <tr key={index}>
                                    <td>
                                        <Link to={`/authors/${author._id}`}>{author.authorName}</Link>
                                    </td>
                                    <td>
                                        <button onClick={()=> {navigate(`/edit/${author._id}`)}}>Edit</button>
                                        <button onClick={()=>deleteHandler(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                            : null
                        }
                    </tbody>
                </table>
            

        </div>
    )
}

export default AllAuthors;


