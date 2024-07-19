import './ToolBar.css'

export default function ToolBar() {
  return (
    <div className="toolsContainer">
        <h4>TOOLS</h4>
        <button>data control</button>
        <button>data control</button>
        <button>data control</button>
        <button>data control</button>
        <button>data control</button>
        <button>data control</button>
        <button>data control</button>

 {/**
  * SO in this component we to enable the user to choose between different pre-set types of sorting ie 
  * sorting by date, amount of money, gas etc. Basically each of these buttons will change the state of
  * the DB that we're seeing from unsorted to sorted .... SO how to we go about this? we want to have a 
  * button that will seek the month and categorize them, it will next look at the day and order them by 
  * the day of the month, seemingly we can do the same for the other figures (gallons, $)... are we going
  * to need to make more tables ? possibly creating tables that represent each month?  
  */}
    </div>
  )
}
