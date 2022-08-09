import React, { Component, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Editquestion = (props) => {

    const [question, setQuestion] = useState(0);
    const [Option, setOption] = useState(0);
    const [question_title, setQuestion_title] = useState(0);
    const [question_type, setQuestion_type] = useState(0);


    const { id } = useParams();
    useEffect(() => {
        console.log(`${id}`);
        fetch("https://meanapi-app.herokuapp.com/getQuestionById/" + `${id}`, {
        method: "Get"})
        .then((response) => response.json())
        .then((result) => {
            console.log(result.data);
            setQuestion(result.data[0].question);
            setOption(result.data[0].optionId[0]?.option);
            setQuestion_title(result.data[0].question_title);
            setQuestion_type(result.data[0].question_type); 
            });

    }, [id]);
    
    
    const postData = () =>{
        
        fetch("https://meanapi-app.herokuapp.com/updateQuestion/" + `${id}`, {
        method: "Post",body: JSON.stringify({ question,question_title,Option,question_type })
    }).then(data => data.json())
    .then((data)=>{
        setQuestion(data.data.question);
        setOption(data.data.optionId[0]?.option);
        setQuestion_title(data.data.question_title);
        setQuestion_type(data.data.question_type);

    })
    }   
    

    return (
        <div>
            <h1>Edit question</h1>
            <div>
                <input onChange={(e) => setQuestion_title(e.target.value)} placeholder="Question Title" value={question_title}/><br /><br />
                <input onChange={(e) => setQuestion(e.target.value)} placeholder="Question"  value={question}/><br /><br />
                <input onChange={(e) => setQuestion_type(e.target.value)} placeholder="Question Type" value={question_type} /><br /><br />
                <input onChange={(e) => setOption(e.target.value)} placeholder="Options" value={Option}/><br /><br />
                 <button onClick={postData}>Update Question</button> 

            </div>
        </div>
    );
}
export default Editquestion
/*import React, { Component } from 'react'

export default class Editquestion extends Component {
    
  render() {
    console.warn(this.props)
    return (
      <div>Editquestion</div>
    )
  }
}*/
