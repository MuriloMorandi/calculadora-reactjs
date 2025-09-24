import { useEffect } from "react";
import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
	const [history, setHistory] = useState([]);
	const historyStorageKey = "history";

	const updateHistory = (operation, result) => {
		setHistory((prev) => {
			const updateHistory = [...prev, `${operation}=${result}`];
			localStorage.setItem(historyStorageKey, JSON.stringify(updateHistory));

			return updateHistory;
		});
	};

	useEffect(() => {
		const savedHistory = localStorage.getItem(historyStorageKey);
		if (savedHistory) {
			setHistory(JSON.parse(savedHistory));
		}
	}, []);

	return (
		<CalculatorContext.Provider
			value={{
				history,
				updateHistory,
			}}
		>
			{children}
		</CalculatorContext.Provider>
	);
};
