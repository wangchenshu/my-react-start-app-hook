import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `已累計 ${count} 次`;
    });

    return (
        <div>
            <p>已累計 {count} 次</p>
            <button onClick={() => setCount(count + 1)}> + </button>
            <button onClick={() => setCount(Math.max(count - 1, 0))}> - </button>
            <button onClick={() => setCount(0)}> 0 </button>
        </div>
    );
}