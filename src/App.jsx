import { CalculatorDisplay } from "./components/CalculatorDisplay"
import { Card } from "./components/ui/Card"
import { OperationHistory } from "./components/OperationHistory"
import { CalculatorKeyPad } from "./components/CalculatorKeyPad"

function App() {

  return (
    <main className="text-(--text) font-(--font-sans) flex justify-center align-center">
      
      <div className={`
        py-8 px-4
        flex flex-col sm:flex-row
        items-center sm:items-stretch
        gap-2
        `}>
        <Card className={`
            flex flex-col gap-[1.5rem] w-[22.25rem]
            pt-14 px-8 pb-8
          `}
        >
          <CalculatorDisplay
            result="2"
            operation="1 + 3"
          />
          
          <CalculatorKeyPad />
        </Card>
        <OperationHistory />
      </div>
    </main>
  )
}

export default App
