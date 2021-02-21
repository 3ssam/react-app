import React from 'react';

const person = (probe) =>{
    return ( <div>
        <p>yes i am {probe.name} and i am {probe.age} years old</p>
        <p>{probe.children}</p>
        </div>
        )}

export default person ;