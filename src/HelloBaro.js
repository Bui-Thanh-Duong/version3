// HelloBaro.js
import React from 'react';

function HelloBaro() {
    // Đặt hàm hiển thị thông báo
    const hiAll = () => {
        alert("hello everyone");
    };

    const hiYou = (name) => {
        alert("Hello " + name);
    };

    return (
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={() => hiYou("Bùi Thành Dương")}>Hi you</button>
        </span>
    );
}

export default HelloBaro;
