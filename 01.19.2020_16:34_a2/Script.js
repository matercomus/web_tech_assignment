$(document).ready(function(){

  $.getJSON("http://wt.ops.labs.vu.nl/api20/43e753ca/", function(data){
    $.each(data, function(i){
      $('#table1').append(
          "<tr>" +
          "<td>" + showImage(data[i].image) + "</td>" +
          "<td>" + data[i].brand + "</td>" +
          "<td>" + data[i].model + "</td>" +
          "<td>" + data[i].os + "</td>" +
          "<td>" + data[i].screensize + "</td>" +
          "</tr>"
      )
      function showImage(imageURL) { 
          var img = document.createElement('img'); 
          img.src =  imageURL; 
          document.getElementById('table1').appendChild(img); 
          // down.innerHTML = "Image Element Added.";  
          return img.innerHTML ="Image fig. "+ i;
      }  

    });
    var table = document.getElementById('table1');
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "<b>Image</b>";
    cell2.innerHTML = "<b>Brand</b>";
    cell3.innerHTML = "<b>Model</b>";
    cell4.innerHTML = "<b>OS</b>";
    cell5.innerHTML = "<b>Screensize</b>";
  });


  
  
});

function sortTable(table, n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  // table = document.getElementById("table2");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// submit button FIX BRACETS

$(document).ready(function(){  
  $("#subButton").click(function(){
    $.ajax({
      url: "http://wt.ops.labs.vu.nl/api20/43e753ca/",
      data: { image: "#imgField", model: "#modelField", brand: "#brandFiled", screensize: "#screensizeField", os: "#osField" },
      type: "POST",
      dataType: 'json',

      success: function (e) {
          //do what needs to be done if successful
          console.log("success"),
      },
      error: function (e) {
          console.log(JSON.stringify(e)),
          console.log("error"),
      }
    });
  })
})