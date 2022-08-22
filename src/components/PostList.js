import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Card, Dropdown, Button, CardGroup } from 'react-bootstrap';

import userServices from '../service/user.services';

const PostList = ({ getUserId }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const data = await userServices.getAllPosts();
        console.log(data.docs);
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    };

    const deleteHandler = async (id) => {
        await userServices.deletePost(id);
        getPosts();
    }

    return (
        <>
            <div className="mb-2">
                <Button variant="dark edit" onClick={getPosts}>Refresh</Button>
            </div>
            {/* <pre>{JSON.stringify(posts, undefined, 2)}</pre> */}
            <CardGroup className='row'>
                <Card className='column'>
                    {posts.map((doc) => {
                        return (
                            <Card.Body className='card' key={doc.id}>
                                <Card.Title>{doc.name}</Card.Title>
                                <Card.Text>{doc.description}</Card.Text>
                                <Card.Text>{doc.hashtag}</Card.Text>
                                <Dropdown><Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View Post</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => getUserId(doc.id)}>Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => deleteHandler(doc.id)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Body>
                            )
                    })}          
                </Card>
            </CardGroup>
        </>
    );
}

export default PostList
