import './CalculatorModal.css';

const CalculatorModal = () => {
  const closeModal = () => {
    const modal = document.getElementById("calculator-modal");
    if (modal) modal.style.display = "none";
  };

  const calculate = () => {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("operation").value;
    let result = "";

    if (isNaN(a) || isNaN(b)) {
      result = "Invalid input";
    } else {
      switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = b !== 0 ? a / b : "Division by zero"; break;
        default: result = "Unknown operation";
      }
    }

    document.getElementById("calc-result").innerText = `Result: ${result}`;
  };

  return (
    <div id="calculator-modal" className="calc-modal">
      <div className="calc-modal-content">
        <span className="calc-close" onClick={closeModal}>&times;</span>
        <h2>Calculator</h2>
        <div className="calc-form">
          <input type="number" id="num1" placeholder="Number 1" />
          <select id="operation">
            <option value="+">+</option>
            <option value="-">−</option>
            <option value="*">×</option>
            <option value="/">÷</option>
          </select>
          <input type="number" id="num2" placeholder="Number 2" />
          <button onClick={calculate}>Calculate</button>
        </div>
        <p id="calc-result" className="calc-result"></p>
      </div>
    </div>
  );
};

export default CalculatorModal;
