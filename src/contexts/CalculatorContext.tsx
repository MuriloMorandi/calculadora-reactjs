import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

interface CalculatorContextType{
	history: string[],
	updateHistory: (operation: string, result: string)=>void,
}

export const CalculatorContext = createContext<CalculatorContextType| undefined>(undefined);

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
	const [history, setHistory] = useState<string[]>([]);
	const historyStorageKey = "history";

	const updateHistory = (operation: string, result: string) => {
		setHistory(prev => {
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

export const useCalculatorContext = () =>{
	const context = useContext(CalculatorContext);
	
	if(!context){
		throw new Error('CalculatorContext must be used within a CalculatorProvider');
	}

	return context;
}