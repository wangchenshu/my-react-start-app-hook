import React, { useState } from 'react';

const ALREADY_STR = '已';
const SUBMIT_STR = '送出';
const CLEAR_STR = '清除';

export default function MyForm() {
    const [value, setValue] = useState(['']);

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        alert(ALREADY_STR + SUBMIT_STR);
        clearValue();
        event.preventDefault();
    }

    function handleClear() {
        clearValue();
    }

    function clearValue() {
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> 請輸入: </label>
            <textarea value={value} onChange={handleChange} />
            <input type='submit' value={SUBMIT_STR} />
            <input type='button' onClick={handleClear} value={CLEAR_STR} />
            <div>目前輸入: {value}</div>
        </form>
    );
}