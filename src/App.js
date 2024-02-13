import React from 'react';
import List from "./component/List";

const App = () => {

    const user = [
        {
        id:1 ,
        title: 'coding',
        completed: false
        },
        {
            id:2,
            title: 'eat',
            completed: false
        },
        {
            id:3,
            title: 'sleep',
            completed: false
        }]
    return (
        <div>
            <List newUser={user}/>
        </div>
    );
};

export default App;
