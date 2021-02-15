
import './pooja.css';
function App() {

const allowedState =
[
{myCar:"BMW",owner:"ABC"},
{myCar:"Tarzon",owner:"ELON"},
{myCar:"TATA",owner:"RATAN TATA"},
];



  return (
    <div>
      <h1> This Is a mapfunction </h1>
      <select>
          {allowedState.map((i,index)=>(
            <option key= {i.id}> {i.myCar}</option>
          ))}
</select>

 <h1> This is Select Tag(Dropdown)</h1>

 <select>
          {allowedState.map((i,index)=>(
            <option key= {i.id}> {i.myCar}</option>
          ))}
</select>

 <h1> This is OLTag(ordered list)</h1>
<ol>
 
          {allowedState.map((i,index)=>(
           <li> <option key= {i.id}> {i.myCar}</option></li>
          ))}

</ol>

 <h1> This is UL Tag(unordered list)</h1>
<ul>
 
          {allowedState.map((i,index)=>(
           <li> <option key= {i.id}> {i.myCar}</option></li>
          ))}

</ul>

<h1>Table</h1>
<table className="mytable">
<tr>
 <td>Sr NO</td> 
 <td>Name</td> 
 <td> Owner  Name</td> 
</tr>


{allowedState.map((i,index)=>(
          <tr>  
            <td><option key= {i.id}> {index+1}</option></td>
            <td><option key= {i.id}> {i.myCar}</option></td>
            <td><option key= {i.id}> {i.owner}</option></td>
            </tr>
          ))} 
 
</table>
 </div>
 
  );
}

export default App;
