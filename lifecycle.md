### Remember

Use https://reactjs.org/docs/react-component.html#the-component-lifecycle and http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ to answer these on your own then compare answers as a group

1.  Each component has several `lifecycle methods` that you can override to do what?
To run code at particular times within the lifecycle process.

2.  What are the 4 categories of lifecycle methods? (these are the headings from the first link)
Mounting, Updating, Unmounting, Error Handling

3.  What are the names of the 5 commonly used lifecycle methods? (these are in bold in the first link)
Constructor, Render, ComponentDidUpdate, ComponentDidMount, ComponenetWillUnmount

### Understand

Discuss this question in pairs if you have a 4-person group

4.  What's going on in this code?
This is a Child component receiving a questions array and an answerQuestion function through props from the Parent component. There will be a console log that says "Dwight saved the day!" every render AFTER the initial one.
The HTML file will look something like this:
Dwight Schrute
(a number stating the questions array length)
questions to answer
(a button that will answer the question that has "Answer a question!" as the text inside the button)

```jsx
import React, { Component } from "react";

class Mentor extends Component {
  constructor(){
    super();

    this.state = {
      initialRender: true,
      log: ""
    }
  }


  componentDidUpdate() {
    if(this.state.initialRender){
      this.setState({
        initialRender: false,
        log: "Dwight saved the day!"
      })
    }
  }


  render() {
    return (
      <div>
        <h1>Dwight Schrute</h1>
        <h2>{this.props.questions.length}</h2>
        <h3>questions to answer</h3>
        <h3>{ this.state.log }</h3>
        <button onClick={this.props.answerQuestion}>Answer a question!</button>
      </div>
    );
  }
}

export default Mentor;
```

### Apply

Try these on your own, but work together if you start to get stuck.

5.  Update the `Mentor` component above so that the message that is currently being console.log'd is displayed below the number of questions to answer instead.
