
import './App.css'
import Heading from './app/components/Heading/Heading'
import ReceiptForm from './app/components/ReceiptForm/ReceiptForm'
import ToolBar from './app/components/ToolBar/ToolBar'
import Counter from './app/components/Counter/Counter'

export default function App() {
    
    return (
    
    <div className='ultimate'>
    <div className='headingToolBarContainer'>

        <Heading />
        <ToolBar />

    </div>
       
        <ReceiptForm />
        <Counter />
        
    </div>
    
)
}
