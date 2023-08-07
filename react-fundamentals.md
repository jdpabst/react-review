### Remember

Answer these on your own, then compare answers as a group

1.  What is React?
  A component based javascript library that allows to to create websites.

2.  What is create-react-app?
  A tool to create single-page React applications.

3.  What is Component Based Architecture?
  Helps you create encapsulated portions of your website that manage themselves or pass information to each other.


4.  What is JSX?
  JSX is a syntax extension of javascript. In React, it allows you to use javascript and HTML together.


5.  What is the virtual DOM?
  It is used in React to keep track of the UI of your webpage and is synced with the "real" DOM.


6.  What is unidirectional (one-way) data flow?
  When data is passed down, but not up. Like from Parent to Child component, but not Child to Parent component.

### Understand

Discuss these questions in pairs if you have a 4-person group

7.  Summarize what happens when you run `create-react-app my-app`
  You create a new react app called "my-app".

8.  Summarize the steps for forking and cloning a repo with an existing React app. How does this process differ from the process of creating a new React app on your laptop?
  After you fork and clone your repo and copy the URL, go to your terminal and clone it using: git clone "yourURL". Make sure you run npm install to make sure everything you need is there.

9.  Explain what this code does:
  This code is a functional component that takes in the prop "title" from the parent component. It then checks if the title is "Lead Mentor" and put's that as the className if it is, if it isn't, className will be an empty string.
  It looks like it will display a bio for each mentor.

```jsx
import React from "react";

const Mentor = props => (
  <div className="mentor-container">
    <h1 className={props.title === "Lead Mentor" ? "lead" : ""}>Tim Biles</h1>
    <ul>
      <li>Fort Worth, TX</li>
      <li>My email address is timbilestimbiles@gmail.com</li>
    </ul>
  </div>
);

export default Mentor;
```

10.  Explain how data is passed from a parent component to a child component.

through props -->

import Child from './Child.js'

.....
return(
  <div>
    <Child thisIsAProp={putYourDataHere} />
  </div>
)

### Apply

Try these on your own, but work together if you start to get stuck.

11.  Use `create-react-app` to create a new React application called `student-directory`

12.  Use the code from `Mentor` above to create a new functional, stateless component called `User` with a list of friends. Hard code the list of friends, do not use state or props.

### Analyze, Evaluate, Create

Discuss these questions as a group

13. What are the benefits and drawbacks of using a tool like create-react-app?
Benefits: Ease of Set up, Standardized configuration, minimal configuration overhead, built-in development server, pre-configured babel and webpack, support for modern JS, automatic polyfills
Drawbacks: Limited Customization, hidden complexity, size overhead, version control impact, tool updates, learning curve

14. Compare and contrast JSX with other templating options, such as those used in Angular or Vue
Vue: direclty imbedded in the HTML. They are declarative and allow you to bind data and DOM elements together.
Angular: HTML-based templating syntax that extends HTML and allows for binding and other directives. They are more declarative and expressive.

15. Compare and contrast one-way data flow with two-way data binding.
One-Way: data only flows one way, usually from parent to child. Changes in the Parent component will be reflected in the Child but not vice-versa. Child components cannot directly modify the parent component. It provides a clear and predicatble data flow that allows you to better track changes and understand the behavior of your application.
Two-Way: allows changes in the UI to automatically update the underlying data and vice-versa. Changes in either of these areas is immediatly shown in the other.