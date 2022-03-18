import { createContext } from "react";

export function getRandom(){
    let messages=[
        "React JS is super fun",
        "React JS has Class Components",
        "React Hooks makes life easy",
        "Event handling can be done using action",
        "CSS is good for the look and feel"
    ]
    return messages[Math.round(Math.random()*4)];
}

export const contextData={
  
    message:"React is Too Big Now!!!",
    setMessage: ()=> {
        contextData.message = getRandom() 
        return contextData.message
    }
  
}

export const Context=createContext(contextData);