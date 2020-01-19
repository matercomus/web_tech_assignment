
//website with the code! ->> // https://www.valentinog.com/blog/html-table/
$(document).ready(function(){
    // let mountains = [{"id": 27454, "brand": "Apple", "model": "iPhone X", "os": "iOS", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/440px-IPhone_X_vector.svg.png", "screensize": 5}, {"id": 27455, "brand": "Samsung", "model": "Galaxy s8", "os": "Android", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Samsung_Galaxy_S8_and_S8_Plus.png/569px-Samsung_Galaxy_S8_and_S8_Plus.png", "screensize": 6}]
    let mountains = 
      $.getJSON("http://wt.ops.labs.vu.nl/api20/43e753ca/", function(data){});
    
      console.log(mountains.responseJSON);
       
    
    
    
    function generateTableHead(table, data) {
      let thead = table.createTHead();
      let row = thead.insertRow();
      for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
    }
    
    function generateTable(table, data) {
      for (let element of data) {
        let row = table.insertRow();
        for (keys in Object.value(element)) {
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      }
    }
    
    let table = document.getElementById("table1");
    let data = Object.keys(mountains);
    generateTable(table, mountains);
    generateTableHead(table, data);
    
    });