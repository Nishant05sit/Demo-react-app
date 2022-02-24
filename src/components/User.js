import React from "react";

function User(props){                            // custom components in react
   // const userName = "Nishant Kumar";
    //const userId ="23456";

    return(
        //React.createElement('h1', {}, 'Nishant Kumar')
        <div>
            <h1>{props.userName}</h1>
            <h1>{props.userId}</h1>
        </div>
        
    );
}

export default User;