import React, { useState, useEffect } from 'react';
import { GUEST_HEADER, FILE_SERVER_INFO_STR, setLocalStorage } from './Common';
import { GUEST_API_PRODUCTS_URL, GUEST_API_FILE_SERVER_INFO_URL } from './Api';

export default function DataLoader() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // 取得產品資料
        fetch(GUEST_API_PRODUCTS_URL, GUEST_HEADER)
            .then(response => response.json())
            .then(data => setData(data.data));

        // 取得檔案伺服器資料
        fetch(GUEST_API_FILE_SERVER_INFO_URL, GUEST_HEADER)
            .then(response => response.json())
            .then(data => setLocalStorage(FILE_SERVER_INFO_STR, JSON.stringify(data.data)));
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