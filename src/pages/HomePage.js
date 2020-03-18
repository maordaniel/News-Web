import React, {useEffect, useState} from 'react';
import NavBar from "../components/navBar";
import axios from 'axios';
import {connect} from "react-redux";
import ModelApp from '../components/modelApp';
import NewsApp from '../components/newsApp';

function HomePage(props) {
    const [articles, setArticles] = useState([]);
    const [show, setShow] = useState(false);
    const [card, setCard] = useState();

    useEffect(() =>{
        news();
    },[]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCard = card => {
        setCard(card);
        handleShow()
    };

    const news = async () =>{
        try {
            const res = await axios.get("http://newsapi.org/v2/top-headlines?country=il&apiKey=540d37b932054c6a8ea898232f9f7e0e")
            setArticles(res.data.articles);
        }catch (e) {
            console.log(e)
        }
    };

    return(
        <div>
            <NavBar/>
            <div className="container" style={{paddingTop:'5%', textAlign:'center', fontSize:25}}>
                <p>Hello {props.auth.username ? props.auth.username : "User"}!</p>
                <p>How are you today?</p>
                <p style={{color:'red', fontSize:'20px'}}>
                    {!props.auth.isLogged ? "Please log in to continue to the awesomeness."
                        :
                        "Today's News :"}</p>
            </div>
            {props.auth.isLogged ?
                <div>
                    <NewsApp articles={articles} getArticle={e=> handleCard(e)}/>
                    <ModelApp card={card} handleClose={handleClose} show={show} />
                </div>
                :null
            }
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        auth: state.auth_reducers
    }
};

export default connect(mapStateToProps, {})(HomePage);
