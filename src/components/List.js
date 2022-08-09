import React, { Component, useMemo } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';
import "./table.css"


class List extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            list:'',
            error:""
        }
    }

    componentDidMount()
    {   
        fetch("https://meanapi-app.herokuapp.com/getQuestion").then((response)=>{
            response.json().then((result)=>{
                   this.setState({list:result.data}) 
            })
        });

    }
   

    render() {
        return (
            
            <div>
                
            {
            this.state.list?
            <div className="container">
                <table>
                <thead>
                <tr>
                    <th>Table-No</th>
                    <th>Title</th>
                    <th>Question</th>
                    <th>Type</th>
                    <th>Added-on</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.list.map((item, i)=>(
                        <tr key={item.question_id}>
                            <td>{item._id}</td>
                            <td>{item.question_title}</td>
                            <td>{item.question}</td>
                            <td>{item.question_type}</td>
                            <td>{item.createdAt}</td>
                            <td>{item.is_active}</td>
                            <td> <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                 <Dropdown.Item href={"./Editquestion/"+item._id}>Edit</Dropdown.Item>
                                 </DropdownButton>
                            </td>
                        </tr>
                            ))
                        }
                    
                </tbody>
            </table>
            </div>
            :<p>Please Wait...</p>
                    }
                    </div>
            
        );
    }
}

export default List;