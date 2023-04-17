import { useState, useEffect } from 'react';
import './App.css';
import api from './api';

function App() {
  const [data, setData] = useState([])
  window.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key == "/") {
      document.getElementById('myInput').focus();
    }
  })
  const apiss = async () => { 
    await api.getData()
    .then((response)=>{
          setData(response.data.data)
      }).catch(error => {
        console.log(error)
       })
  }

  useEffect(() => {
    apiss()
    },[])

  console.log(data)
  function myFunction(event) {
    if (event.key === "Enter") {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByClassName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
            const boxes = document.querySelectorAll('.add');
            boxes.forEach(box => {  
                box.remove();
            });
        } else {
            tr[i].style.display = "none";
            const boxes = document.querySelectorAll('.add');
            boxes.forEach(box => {  
                box.remove();
            });
            var not_found = document.createElement("div")
            not_found.className = 'add';
            not_found.innerText = "No Results Found"
            document.body.appendChild(not_found);
        }
    }
    }

  }

  return (
    <div className="App">
      
      <input type='text' id='myInput' className='search-input' placeholder='Search Places...' onKeyPress={(e) => myFunction(e)}/>
        <div>
          <table id='myTable'>
            <tr>
              <th>#</th>
              <th>Place Name</th>
              <th>Country</th>
            </tr>
            {data.map((arr) => {
              return (
                <tr className='tr'>
                  <td className='td'>{arr.id}</td>
                  <td className='td'>{arr.name}</td>
                  <td className='td'>{arr.country}</td>
                </tr>
              )})}
          </table>
        </div>
        <div class="pagination-section">
        <ul class="pagination">
            <li class="page-item prev"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item next"><a class="page-link" href="#">Next</a></li>
        </ul>
</div>
    </div>
  );
}

export default App;
