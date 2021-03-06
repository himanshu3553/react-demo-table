import React from 'react';
import Table from './Table.jsx';

export default class App extends React.Component {
    
  constructor(props){
    super(props);
    this.state={
      tableData:[
        {'fruit': 'Apple', 'cost': 100},
        {'fruit': 'Orange', 'cost': 50},
        {'fruit': 'Banana', 'cost': 35},
        {'fruit': 'Mango', 'cost': 70},
        {'fruit': 'Pineapple', 'cost': 45},
        {'fruit': 'Papaya', 'cost': 40},
        {'fruit': 'Watermelon', 'cost': 35}
      ],
      tableData2:[
        {'Name': 'Abc', 'Age': 15, 'Location': 'Bangalore'},
        {'Name': 'Def', 'Age': 43, 'Location': 'Mumbai'},
        {'Name': 'Uff', 'Age': 30, 'Location': 'Chennai'},
        {'Name': 'Ammse', 'Age': 87, 'Location': 'Delhi'},
        {'Name': 'Yysse', 'Age': 28, 'Location': 'Hyderabad'}
    ]
    }
  }
  
  
  render() {
      
      
      return (
        <div className="App">
          Hello, React
          <br/> Table 1 data
          <Table data={this.state.tableData}/>
          
          <br/> Table 2 data
          <Table data={this.state.tableData2}/>
        </div>
        
      );
  }
  
 
}
