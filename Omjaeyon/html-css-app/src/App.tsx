import './App.css'
import { VariableAndDataTypes } from './data_type/VariableAndDataType'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'

import { FirstProblem } from './problem/FirstProblem'
import { ControlFlowSwithch } from './control_flow/ControlFlowSwitch copy'
import { ControlFlowFor } from './control_flow/ControlFlowFor'  
import { ControlFlowForSummation } from './control_flow/ControlFlowForSummation'
import { ControlFlowForSumExample } from './control_flow/ControlFlowForSumExample'
import { SecondProblem } from './problem/SecondProblem' 
import { MapExample } from './map/MapExample'
import { MapReduceExample } from './map/MapReduceExample'
function App() {

  return (
    <>
      <div>
       {/*여러분만의 커스텀 태그 생성 */}
       {/*이 커스텀 태그는 단순히 사칙연산+나머지 연산 */}
       <CalculationExample />
       <VariableAndDataTypes />
       <LogicalOperationExample />
       <ControlFlowIf />
       <FirstProblem />
       <ControlFlowSwithch />
       <ControlFlowFor />
       <ControlFlowForSummation />
       <ControlFlowForSumExample />
       <SecondProblem />
        <MapExample />
        <MapReduceExample />

      </div>
      
    </>
  )
}

export default App
