### Remember

Answer these on your own, then compare answers as a group

1.  What are props?
props are pieces of information passed from Parent to Child compoenent that can update the Parent component. It a way to pass information up instead of the standard passing information down in react.
2.  How do you pass props from a parent to a child?
import Child from "./Child.js"
in the render() :
<Child props={this.state.info}/>

3.  How do you access props from a class-based child component?
used in the render method --> this.props.info
4.  How do you access props from a functional component?
as a parameter in the function, can use {props.info} or use destructuring in the function parameter area like this : function({info}) and just use {info} in your code.
5.  How do you bind a function to a parent component so that it can be passed to a child?
this.function = this.function.bind(this);

### Understand

Discuss this question in pairs if you have a 4-person group
This function is keeping track of a question array on state. There are two functions, one will add a question and the other one will remove a specified question from the question array on state. It then displays the questions like this:
The Queue
{ the length of the questions array on state }
questions need answers
{ a Student child component that passes down the function that will add a question to the questions array on state }
{ a Mentor child compoenent that passes down the function to remove a specific question from the questions array on state }
6.  What's happening in this component?

```jsx
import React, { Component } from "react";

class Queue extends Component {
  constructor() {
    super();

    this.state = {
      questions: []
    };

    this.askQuestion = this.askQuestion.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
  }
  askQuestion(newQuestion) {
    const questions = [...this.state.questions, newQuestion];
    this.setState({ questions });
  }
  answerQuestion(index) {
    const questions = [...this.state.questions];
    questions.splice(index, 1);
    this.setState({ questions });
  }
  render() {
    return(
       <div className="queue-container">
      <h1>The Queue</h1>
      <h3>{this.state.questions.length}</h3>
      <h3>questions need answers</h3>
      <Student askQuestion={this.askQuestion} />
      <Mentor answerQuestion={this.answerQuestion} questions={this.state.questions} />
    </div>;
    )
  }
}

export default Queue

////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
 
class Student extends Component {
   constructor(props){
    super(props);

    this.state = {
      userInput: ''
    }

    this.handleUserInput = this.handleUserInput.bind(this);

  }

  handleUserInput(val){
    this.setState({
      userInput: val
    })
  }
  handleAskQuestion(){
    this.props.askQuestion(this.state.userInput);
    this.setState({userInput: ''})
  }

  render(
    { userInput } = this.state;

    return(
      <div>
        <input value={ this.state.userInput } onChange={ (e) => this.handleUserInput(e.target.value) }/>
        <button onClick={this.handleAskQuestion}>Ask a Question</button>
      </div>
    )
  )
}

export default Student;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';

class Mentor extends Component {
  render(){
    return(
      <div>
      {this.props.questions.map((question, index) => (
        <div key={index}>
          <p>{ question }</p>
          <button onClick={()=> this.props.answerQuestion(index)}>Answer a Question</button>
        </div>
      ))}
      </div>
    )
  }
}

export default Mentor;
```

### Apply

Try these on your own, but work together if you start to get stuck.

7.  Using the `Queue` component above, create a `Student` component that can add a question as a string and a `Mentor` component that can remove a question from the array.

### Analyze, Evaluate, Create

Discuss these questions as a group

8.  In the Queue component above, why are we holding state in the Queue component instead of Mentor or Student?
Because Queue is the parent component.
