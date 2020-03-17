import React from 'react';
import {Card} from "react-bootstrap";

function NewsApp(props) {
    return(
        <div className="container" style={{ display:'flex',overflow: "auto",direction:'rtl'}}>
            {props.articles.map(article =>
                <Card style={{ width: '18rem',minWidth: '200px',textAlign:'right'}} onClick={() => props.getArticle(article)}
                    bg='dark'
                    text='white'
                    border="light"
                >
                    <Card.Img variant="top" src={article.urlToImage} />
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                    </Card.Body>
                </Card>)
            }
        </div>
    )
}

export default NewsApp;
