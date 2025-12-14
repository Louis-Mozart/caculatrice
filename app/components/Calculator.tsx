'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      let newValue = currentValue;

      switch (operation) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '×':
          newValue = currentValue * inputValue;
          break;
        case '÷':
          newValue = currentValue / inputValue;
          break;
        case '=':
          newValue = inputValue;
          break;
        default:
          break;
      }

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handlePercentage = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue / 100));
  };

  const toggleSign = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue * -1));
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Display */}
        <div className="bg-gray-950 px-6 py-8">
          <div className="text-right">
            <div className="text-gray-500 text-sm mb-1 min-h-5">
              {previousValue !== null && operation && operation !== '=' 
                ? `${previousValue} ${operation}` 
                : ''}
            </div>
            <div className="text-white text-5xl font-light tracking-tight overflow-hidden text-ellipsis">
              {display}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-px bg-gray-900 p-px">
          {/* Row 1 */}
          <Button onClick={clear} variant="secondary">
            AC
          </Button>
          <Button onClick={toggleSign} variant="secondary">
            +/-
          </Button>
          <Button onClick={handlePercentage} variant="secondary">
            %
          </Button>
          <Button onClick={() => performOperation('÷')} variant="operator">
            ÷
          </Button>

          {/* Row 2 */}
          <Button onClick={() => inputDigit('7')}>7</Button>
          <Button onClick={() => inputDigit('8')}>8</Button>
          <Button onClick={() => inputDigit('9')}>9</Button>
          <Button onClick={() => performOperation('×')} variant="operator">
            ×
          </Button>

          {/* Row 3 */}
          <Button onClick={() => inputDigit('4')}>4</Button>
          <Button onClick={() => inputDigit('5')}>5</Button>
          <Button onClick={() => inputDigit('6')}>6</Button>
          <Button onClick={() => performOperation('-')} variant="operator">
            −
          </Button>

          {/* Row 4 */}
          <Button onClick={() => inputDigit('1')}>1</Button>
          <Button onClick={() => inputDigit('2')}>2</Button>
          <Button onClick={() => inputDigit('3')}>3</Button>
          <Button onClick={() => performOperation('+')} variant="operator">
            +
          </Button>

          {/* Row 5 */}
          <Button onClick={() => inputDigit('0')} className="col-span-2">
            0
          </Button>
          <Button onClick={inputDecimal}>.</Button>
          <Button onClick={() => performOperation('=')} variant="operator">
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'operator' | 'secondary';
  className?: string;
}

function Button({ children, onClick, variant = 'default', className = '' }: ButtonProps) {
  const baseClasses = 'h-20 text-2xl font-medium transition-all active:scale-95 focus:outline-none';
  
  const variantClasses = {
    default: 'bg-gray-700 hover:bg-gray-600 text-white',
    operator: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-500 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
