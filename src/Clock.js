import React, { useState, useEffect } from 'react';

export default function Clock() {

    const [date, setDate] = useState(['']);

    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000
        );
        return () => clearInterval(timerID);
    });

    function tick() {
        let timeStr = new Date().toLocaleTimeString();
        setDate(timeStr);
    }

    return <h2 className="my-clock">{date}</h2>;
}