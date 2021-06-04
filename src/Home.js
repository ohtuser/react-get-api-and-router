import { useState, useEffect} from 'react';
import {Link, BrowserRouter as  Router, Route, Switch} from 'react-router-dom';
import Blog from './Blog.js';
import './App.css';
import { Table, Button } from 'react-bootstrap';
function Home() {


    let [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
        res.json().then((resp)=>{
            setData(resp)
        })
        });
    },[]);

    return (
        <Router>
            
            <div className="App">
            <Switch>
                <Route path="/blog/:id">
                    <Blog/>
                </Route>
                <Route exact={true} path="/">
                <Link to="/"><Button variant="dark" className="mt-3">Home</Button></Link>
                    <Table striped bordered hover className="mt-3">
                        <thead>
                        <tr>
                            <td>id</td>
                            <td>UserId</td>
                            <td>title</td>
                            <td>body</td>
                        </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((val,key)=>
                                <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.userId}</td>
                                <td>{val.title}</td>
                                <td>{val.body}</td>
                                <td><Link to={"/blog/"+val.id}><Button variant="dark">View</Button></Link></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

export default Home;