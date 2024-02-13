import React from 'react';

const List = (props) => {
    return (
        <div >
            {
                props.newUser.map((item) =>
                <div style={{ marginTop: '20px' ,border: '3px orange solid', display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '30px'}}>
                    <h2>{item.title}</h2>
                    <p>{item.id}</p>
                    <span>{item.completed}</span>
                </div>
            )}
        </div>
    );
};

export default List;