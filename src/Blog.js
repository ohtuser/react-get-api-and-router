import { useEffect, useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
function Blog(props) {

    let [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/"+props.match.params.id)
        .then((res)=>{
            res.json().then((resp)=>{
                setData(resp)
            })
        });
    },[]);
    
    return(
        <div>
            <Link to="/"><Button className="mt-3" variant="dark">Home</Button></Link>
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
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.userId}</td>
                        <td>{data.title}</td>
                        <td>{data.body}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default withRouter(Blog);