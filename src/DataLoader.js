import React, { useState, useEffect } from 'react';
import { GUEST_HEADER } from './Common';
import { GUEST_API_PRODUCTS_URL } from './Api';

export default function DataLoader() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // 取得產品資料
        fetch(GUEST_API_PRODUCTS_URL, GUEST_HEADER)
            .then(response => response.json())
            .then(data => setData(data.data));
    }, []);

    return (
        <div>
            <h2>產品資料: </h2>
            <ul>
                {data.map(el => (
                <li key={el.id}>{el.name}-</li>
                ))}
            </ul>
        </div>
    );
}