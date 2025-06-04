import React, { useState } from 'react';
import './CalculatorModal.css';

const CalculatorModal = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const appendValue = (value) => setInput((prev) => prev + value);

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => setInput((prev) => prev.slice(0, -1));

  const toggleSign = () => {
    if (!input) return;
    if (input.startsWith('-')) setInput(input.slice(1));
    else setInput('-' + input);
  };

  const calculate = () => {
    try {
      const sanitized = input.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
      const evalResult = eval(sanitized);
      setResult(evalResult.toString());
      setInput(evalResult.toString());
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator-modal">
      <div className="calculator-content">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="calculator-display">
          <div className="input">{input || '0'}</div>
          <div className="result">{result && result !== input ? `= ${result}` : ''}</div>
        </div>
        <div className="calculator-buttons">
          <button onClick={clearInput}>C</button>
          <button onClick={toggleSign}>+/-</button>
          <button onClick={backspace}>⌫</button>
          <button onClick={() => appendValue('÷')}>÷</button>

          <button onClick={() => appendValue('7')}>7</button>
          <button onClick={() => appendValue('8')}>8</button>
          <button onClick={() => appendValue('9')}>9</button>
          <button onClick={() => appendValue('×')}>×</button>

          <button onClick={() => appendValue('4')}>4</button>
          <button onClick={() => appendValue('5')}>5</button>
          <button onClick={() => appendValue('6')}>6</button>
          <button onClick={() => appendValue('−')}>−</button>

          <button onClick={() => appendValue('1')}>1</button>
          <button onClick={() => appendValue('2')}>2</button>
          <button onClick={() => appendValue('3')}>3</button>
          <button onClick={() => appendValue('+')}>+</button>

          <button className="zero" onClick={() => appendValue('0')}>0</button>
          <button onClick={() => appendValue('.')}>.</button>
          <button className="equals" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorModal;
