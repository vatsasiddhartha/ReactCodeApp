// How to create and nest components
// How to add markup and styles
// How to display data
// How to render conditions and lists
// How to respond to events and update the screen
// How to share data between components
// React components are JavaScript functions that return markup 

//React component names must always start with a capital letter, while HTML tags must be lowercase.
import React, { useState } from "react";
import "./splashscreen.css";
import Starfield from "./Starfield";

function SplashScreen() {
  // useState is a React Hook that lets a component keep track of state (data that can change over time).

// It returns an array with two items:

// language → the current state value. In your case, it starts as an empty string "".

// setLanguage → a function to update that state. Whenever you call it, React will re-render the component with the new value.


  const [language, setLanguage] = useState("");

  const syntaxExamples = {
    java: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
    python: `def greet():
    print("Hello, World!")

greet()`,
    c: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    cpp: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
    js: `function greet() {
    console.log("Hello, World!");
}

greet();`
  };

  const showSyntax = (e) => {
    setLanguage(e.target.value);
  };

  const nextPage = () => {
    // Replace with React Router navigation if needed
    window.location.href = "/codeditor";
  };
  const User={
    name:"BugSlayer",
    age:21,
    intro:"Hello this is my Java FullStack project which is proof of my skills in java and react, I am beginner in react but i have learned a lot from this project also i have expreience in java and springboot",
    imageUrl:"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT8EqMx1tVrCfNlAUnZp6r_lUDlFw-M68bzqRebAfzeKuSo-cNdwQvheORyJ-5wjFP4"


  }

  return (

    
    <div className="splash-screen">
      <h1>ToodlesCode</h1>
      <p>Code with Power. Learn with Passion.</p>
<Starfield />
      <div className="languages">
        <h3>Supported Languages:</h3>
        <select
          className="form-select language-select"
          value={language}
          onChange={showSyntax}
        >
          <option value="">-- Select a Language --</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="js">JavaScript</option>
        </select>
      </div>

      <div className="code-box">
        {language && <pre>{syntaxExamples[language]}</pre>}
      </div>

      <button className="next-btn" onClick={nextPage}>
        Next
      </button>
      <div className="user-profile">
        <img src={User.imageUrl} alt="User Profile" className="profile-pic" />
        <h2>{User.name}</h2>
        <p>Age: {User.age}</p>
        <p>{User.intro}</p>
      </div>  
    </div>
  );
}

export default SplashScreen;
