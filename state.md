### Remember

Answer these on your own, then compare answers as a group

1.  What is state?
  state is a way to keep track of changing data in your component.

2.  Where do you set initial state?
  This is set in a constructor function right after you declare your component like this:

  class Child extends Component{
    constructor(){
      super();

      this.state = {}
    }
  }

3.  What method do you use to update state?
    this.setState({})

### Understand

Discuss this question in pairs if you have a 4-person group

4.  Explain what's happening in this component.
it is keeping track of how many questions Michael Scott has answered and using a button to update state by adding 1 to the questionsAnswered number on state.

```jsx
import React, { Component } from "react";

class LeadMentor extends Component {
  constructor() {
    super();

    this.state = {
      questionsAnswered: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ questionsAnswered: this.state.questionsAnswered + 1 });
  }
  render() {
    <div className="lead-mentor-container">
      <h1>Michael Scott</h1>
      <h3>{this.state.questionsAnswered}</h3>
      <h3>questions answered today</h3>
      <button onClick={this.handleClick}>Increase Answers</button>
    </div>;
  }
}

///////////////////////////////////////////////
import React, {Component} from 'react';

class Student extends Component {
  constructor(){
    super();

    this.state={
      asked: 0,
      questions: [],
      userInput: ''
    }

    this.askQuestion = this.askQuestion.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  askQuestion(){
    const { asked, questions, userInput } = this.state;

    let arr = [... questions];
    arr.push(userInput)


    this.setState({
      asked: asked + 1,
      questions: arr
    })
  }

  handleUserInput(val){
    this.setState({
      userInput: val
    })
  }

  render(
    const { questions, userInput } = this.state;
        return(
      <div>
        <input value={ userInput } onChange = { (e) => this.handleUserInput(e.target.value) } />
        <ul>
          {questions.map((question, index) => (
            <li key={ index }>{ question }</li>
          ))}
        </ul>
        <button onClick={ this.askQuestion }>Ask Question</button>
      </div>
    )
  )
}
```

### Apply

Try these on your own, but work together if you start to get stuck.

5.  Create a `Student` component that keeps track of the number of questions the student has asked, with a button that adds 1 to the total when it's clicked

6.  Now add a text input where the student can type in their questions with a button to add them to a list of questions that is displayed below the number of questions asked.

### Analyze, Evaluate, Create

Discuss these questions as a group

7.  Could your `Student` component be refactored into a functional component? Why or why not?
Yes, just add the elements on its state to the parent state. Or use react hooks to manage a state on the functional component.

8.  What are the pros and cons of using a class method for an event handler vs. using an arrow function inline?
Class methods are better for performance, are easy to read, and easier to debug. You do have to use the bind method in the constructor function or it won't work.
Arrow functions are consice and have access to local scope so you don't have to use "bind". They can cause unintended re-renders and performance issues. They are also more difficult to debug.

9.  The render() method is called every time a component's state is updated. For a text input, that means the render method is called for every keypress. Why isn't this bad for performance?
Because of the virtual DOM and react's optimization mechanisms that keep the DOM from rendering too frequently.