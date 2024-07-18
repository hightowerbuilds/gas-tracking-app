
import './App.css'
import Heading from './components/Heading'
import ReceiptForm from './components/ReceiptForm'
import ToolBar from './components/ToolBar'



export default function App() {
    
    return (
    
    <div className='ultimate'>
    <div className='headingToolBarContainer'>

        <Heading />
        <ToolBar />

    </div>
       
        <ReceiptForm />
        
    </div>
    
)
}
