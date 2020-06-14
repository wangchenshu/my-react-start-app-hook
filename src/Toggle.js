import React, { useState } from 'react';

export default function Toggle() {
    const [isToggle, setIsToggle] = useState(true);

    function handleClick() {
        setIsToggle(!isToggle);
    }

    return <button onClick={handleClick}>{isToggle ? 'ON' : 'OFF'}</button>;
}