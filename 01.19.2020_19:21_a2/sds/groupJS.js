





$(document).ready(function(){
    // let mountains = [{"id": 27454, "brand": "Apple", "model": "iPhone X", "os": "iOS", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/IPhone_X_vector.svg/440px-IPhone_X_vector.svg.png", "screensize": 5}, {"id": 27455, "brand": "Samsung", "model": "Galaxy s8", "os": "Android", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Samsung_Galaxy_S8_and_S8_Plus.png/569px-Samsung_Galaxy_S8_and_S8_Plus.png", "screensize": 6}]
    let mountains = 
      $.get("http://wt.ops.labs.vu.nl/api20/43e753ca/", function(data){
        console.log(data);
      for(let el in data){
        // console.log(data[el]['brand']);
        // console.log(data[el]['model']);
        $("#table1")
        .append( data[el]['brand'])
        .append(data[el]['model']);
      }
    
        // let table = document.getElementById("table1");
        //  let data1 = Object.keys(mountains);
        // generateTable(table, mountains);
        // generateTableHead(table, data1);
      
      });
    
       console.log(mountains);
         
    
    
    
    function generateTableHead(table, data1) {
      let thead = table.createTHead();
      let row = thead.insertRow();
      for (let key of data1) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
    }
    
    // function generateTable(table, data1) {
    //   for (let element of data1) {
    //     let row = table.insertRow();
    //     for (keys in element) {
    //       let cell = row.insertCell();
    //       let text = document.createTextNode(element[key]);
    //       cell.appendChild(text);
    //     }
    //   }
    // }
    
    // let table = document.getElementById("table1");
    // let data1 = Object.keys(mountains[0]);
    // generateTable(table, mountains);
    // generateTableHead(table, data1);
    
    });