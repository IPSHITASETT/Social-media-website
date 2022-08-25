import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import userServices from '../service/user.services';


const AddPost = ({ id, setUserId }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [hashtag, setHashtag] = useState([]);
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (name === "" || description === "" || hashtag === []) {
            setMessage({ error: true, msg: "All fields are mandatory" });
            return;
        }
        const newPost = {
            name,
            description,
            hashtag,
        };
        console.log(newPost);

        try {
            if (id !== undefined && id !== "") {
                await userServices.updatePost(id, newPost);
                setUserId("");
                setMessage({ error: false, msg: "Updated Successfully!" });

            } else {
                await userServices.addAnyPost(newPost);
                setMessage({ error: false, msg: "Uploaded Successfully!" });

            }

        } catch (err) {
            setMessage({ error: true, msg: err.message });

        }
        setName("");
        setDescription("");
        setHashtag([])
    };

    const editHandler = async () => {
        setMessage("")
        try {
            const docSnap = await userServices.getPost(id);
            console.log("The record is: ", docSnap.data());
            setName(docSnap.data().name);
            setDescription(docSnap.data().description);
            setHashtag(docSnap.data().hashtag);
        } catch (err) {
            setMessage({ error: true, msg: err.message })
        }

    }

    useEffect(() => {
        console.log("The id is here: ", id);
        if (id !== undefined && id !== "") {
            editHandler();
        }

    }, [id])


    return (
        <>
            <div className="p-4 box">
                {message?.msg && (
                    <Alert variant={message?.error ? "danger" : "success"} dismissible onClose={() => setMessage("")}>
                        {message?.msg}
                    </Alert>)}


                <Form className="formStyle" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label id="userName">Name</Form.Label>
                        <Form.Control type="text" placeholder="Alex Zinda" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label id="userDescription">Description</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder="Write Here..." value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label id="userHashtag">Hashtag</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Add your favourite hashtag here..." value={hashtag} onChange={(e) => setHashtag(e.target.value.split(','))} />
                    </Form.Group>
                    <div>
                        <Button variant="primary" type="Submit">
                            Upload
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default AddPost;
