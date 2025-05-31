import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [history, setHistory] = useState([]);

    const updateHistory = (operation, result) => {
        setHistory((prev) => [...prev, `${operation}=${result}`])
    }

    return (
        <CalculatorContext.Provider
            value={{
                history,
                updateHistory
            }}
        >
            { children }
        </CalculatorContext.Provider>
    )
}