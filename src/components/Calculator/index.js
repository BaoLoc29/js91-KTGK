import { useState } from "react";
import './style.css'
const Calculator = () => {
    const [display, setDisplay] = useState('');

    const handleClick = (label) => {
        switch (label) {
            case 'C':
                setDisplay('');
                break;
            case '=':
                try {
                    setDisplay((eval(display)).toString());
                } catch {
                    setDisplay('Error');
                }
                break;
            default:
                setDisplay(display + label);
                break;
        }
    };

    return (
        <div className="mainCalc">
            <div className="Calc-menu">
                <div className="input-number">
                    <input type="text" value={display} readOnly />
                </div>
                <div className="allowable">
                    <Button label="+" onClick={() => handleClick('+')} />
                    <Button label="-" onClick={() => handleClick('-')} />
                    <Button label="*" onClick={() => handleClick('*')} />
                    <Button label="/" onClick={() => handleClick('/')} />
                </div>
                <div className="number-left">
                    <Button label="7" onClick={() => handleClick('7')} />
                    <Button label="8" onClick={() => handleClick('8')} />
                    <Button label="9" onClick={() => handleClick('9')} />

                    <Button label="4" onClick={() => handleClick('4')} />
                    <Button label="5" onClick={() => handleClick('5')} />
                    <Button label="6" onClick={() => handleClick('6')} />

                    <Button label="1" onClick={() => handleClick('1')} />
                    <Button label="2" onClick={() => handleClick('2')} />
                    <Button label="3" onClick={() => handleClick('3')} />

                    <Button label="0" onClick={() => handleClick('0')} />
                    <Button label="." onClick={() => handleClick('.')} />
                    <Button label="C" onClick={() => handleClick('C')} />
                </div>
                <div className="equal">
                    <Button label="=" onClick={() => handleClick('=')} />
                </div>
            </div>
        </div>
    );
};

const Button = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};

export default Calculator;
