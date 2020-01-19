let mountains = [
    { image: "", brand: "", model: "", os: " ", screensize: null}
  ];

///////////////////////////////////////////
  $.get("http://wt.ops.labs.vu.nl/api20/43e753ca/", function(data){
    console.log(data);

    for(let el in data){
        // console.log(data[el]['brand']);
        // console.log(data[el]['model']);
        $("#table1")
        .append( data[el]['brand'])
        .append(data[el]['model']);
    }
    $.each(data, function(i){
        // function addRow() {
                var table = document.getElementById("table1");
                var row = table.insertRow(i + 1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                // cell1.innerHTML = "NEW CELL1";
                // cell2.innerHTML = "NEW CELL2";
            // }
    });
  
  });

///////////////////////////////////////////
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
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }


  let table = document.getElementById("table1");
  let data = Object.keys(mountains[0]);
  generateTableHead(table, data);
  generateTable(table, mountains);


  /////////////////////////////////////////////////////////////////////////////////////////////
// let mountains =  [JSON.parse('{ "name":"John", "age":30, "city":"New York"}')];

/////////////////////////////////////////////////////////////////////////////////////////////////////
// var dataJSON;
// let mountains = dataJSON;
// $.getJSON( "http://wt.ops.labs.vu.nl/api20/43e753ca/", function(res){
//     dataJSON = res;
// });
// console.log(mountains);
// let mountains =  [JSON.parse(dataJSON)];
///////////////////////////////////////////////////////////////////////////////////////////////
// let mountains;
// $.getJSON("http://wt.ops.labs.vu.nl/api20/43e753ca/", callbackFuncWithData);

// function callbackFuncWithData(data)
// {
//  // do some thing with data 
//  for(let el in data){
//      var arr = 
//     // (data[el]['brand']),
//     // (data[el]['model']),
//     // ( data[el]['os']),
//     (data[el]['screensize']);
     
//      mountains = [arr];
//   }

  
// }
// console.log(mountains)
//////////////////////////////////////////////////////////////////////////////////////////////////////
// var mountains;

// $.ajax({
//   dataType: "json",
//   url: "http://wt.ops.labs.vu.nl/api20/43e753ca/",
//   data: data,
//   success: function(data) {
//        mountains = data;
//     }
// });
