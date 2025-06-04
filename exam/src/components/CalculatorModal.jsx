import React, { useState, useEffect } from 'react';
import './CalculatorModal.css';

const CalculatorModal = ({ isVisible, onClose }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (!isVisible) {
      setInput('');
      setResult('');
    }
  }, [isVisible]);

  const appendValue = (value) => {
    setInput((prev) => prev + value);
    setResult('');
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
    setResult('');
  };

  const calculate = () => {
    try {
      const sanitized = input.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
      const evalResult = eval(sanitized);
      const resultStr = evalResult.toString();
      setResult(resultStr);
      setInput(resultStr);
    } catch {
      setResult('Error');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="calculator-modal">
      <div className="calculator-content">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="calculator-display">
          <div className="input">{input || '0'}</div>
          <div className="result">{result ? `= ${result}` : ''}</div>
        </div>
        <div className="calculator-buttons">
          <button onClick={clearInput}>C</button>
          <button onClick={deleteLast}>⌫</button>
          <button onClick={() => appendValue('÷')}>÷</button>
          <button onClick={() => appendValue('×')}>×</button>

          <button onClick={() => appendValue('7')}>7</button>
          <button onClick={() => appendValue('8')}>8</button>
          <button onClick={() => appendValue('9')}>9</button>
          <button onClick={() => appendValue('−')}>−</button>

          <button onClick={() => appendValue('4')}>4</button>
          <button onClick={() => appendValue('5')}>5</button>
          <button onClick={() => appendValue('6')}>6</button>
          <button onClick={() => appendValue('+')}>+</button>

          <button onClick={() => appendValue('1')}>1</button>
          <button onClick={() => appendValue('2')}>2</button>
          <button onClick={() => appendValue('3')}>3</button>
          <button className="equals" onClick={calculate}>=</button>

          <button className="zero" onClick={() => appendValue('0')}>0</button>
          <button onClick={() => appendValue('.')}>.</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorModal;
