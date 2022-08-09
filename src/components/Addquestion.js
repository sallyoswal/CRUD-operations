import React, { Component } from 'react';

class Addquestion extends Component {
    constructor()
    {
        super();
        this.state={
            question_title:null,
            question:null,
            question_type:null,
            options:null
        }
    }
    create()
    {
         fetch("https://meanapi-app.herokuapp.com/addQuestion",{
            method: "Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Question is created");
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Add question</h1>
                <div>
                    <input onChange={(event)=>{this.setState({question_title:event.target.value})}} 
                    placeholder="Question Title"/><br/><br/>
                    <input onChange={(event)=>{this.setState({question:event.target.value})}} 
                    placeholder="Question"/><br/><br/>
                    <input onChange={(event)=>{this.setState({question_type:event.target.value})}} 
                    placeholder="Question Type"/><br/><br/>
                    <input onChange={(event)=>{this.setState({options:event.target.value})}} 
                    placeholder="Options"/><br/><br/>
                    <button onClick={()=>{this.create()}}>Add Question</button>

                </div>
            </div>
        );
    }
}

export default Addquestion;