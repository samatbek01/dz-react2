import React from 'react';

const List = (props) => {
    return (
        <div>
            {
                props.newUser.map((item) =>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.id}</p>
                    <span>{item.completed}</span>
                </div>
            )}
        </div>
    );
};

export default List;