import React, { useState, useEffect } from 'react';

export default function Clock() {

    const [date, setDate] = useState(['']);
    let timerID;
    //this.tick = this.tick.bind(this);

    useEffect(() => {
        timerID = setInterval(
            () => tick(),
            1000
        )
    });

    function tick() {
        let timeStr = new Date().toLocaleTimeString();
        setDate(timeStr);
    }

    return (
        <div>
            <h2 className="my-clock">{date}</h2>
        </div>
    );
}