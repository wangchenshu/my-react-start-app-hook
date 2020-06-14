import React, { useState } from 'react';

const YOU_SELECT = '您選擇了 ';
const NOTHING_SELECT = '未選擇';

export default function MySelect() {

    const [value, setValue] = useState('');
    const [showValue, setShowValue] = useState(NOTHING_SELECT);

    function handleChange(event) {
        var index = event.nativeEvent.target.selectedIndex;
        var targetText = YOU_SELECT + event.target[index].text;
        
        if (event.target.value === '') {
            targetText = NOTHING_SELECT;
        }

        setValue(event.target.value);
        setShowValue(targetText);
    }

    return (
        <div>
            <label>
                選擇:
                <select value={value} onChange={handleChange}>
                    <option value=''>無</option>
                    <option value='apple'>蘋果</option>
                    <option value='orange'>橙子</option>
                    <option value='banana'>香蕉</option>
                    <option value='mango'>芒果</option>
                </select>
                {showValue}
            </label>
        </div>
    );
}
