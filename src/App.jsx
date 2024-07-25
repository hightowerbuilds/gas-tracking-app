
import './App.css'
import Heading from './app/components/Heading/Heading'
import ReceiptForm from './app/components/ReceiptForm/ReceiptForm'
import ToolBar from './app/components/ToolBar'


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
