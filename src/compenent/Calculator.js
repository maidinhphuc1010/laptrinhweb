import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (label) => {
    if (label === "C") {
      setInput(""); // Xóa màn hình
    } else if (label === "=") {
      try {
        setInput(eval(input).toString()); // Tính toán biểu thức
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + label); // Thêm ký tự vào chuỗi biểu thức
    }
  };

  const buttons = [
    "C", "/", "*", "-",
    "7", "8", "9", "+",
    "4", "5", "6",
    "1", "2", "3",
    "0", ".", "="
  ];

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button key={index} label={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
