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

// function addRow() {
//     var table = document.getElementById("table1");
//     var row = table.insertRow(1);
//     var cell1 = row.insertCell(0);https://l.facebook.com/l.php?u=https%3A%2F%2Fprod.liveshare.vsengsaas.visualstudio.com%2Fjoin%3FF85FE5259DE30EDD4AA53A6C739DAB298A23%26fbclid%3DIwAR2dHMKdCIUCt6MtOlhdwPP9sKWFTFLbzBxFWE06VBJi2AWkLVCDNn47_2c&h=AT21HTiSRuaMsoUmeQW4JNJz_Y_ctVm7iqnb_gTRFt_BDy4nyKcClOg6FngwLm2OZzYeFS3kOH95fmYk-Sy-SnS23XjRsHhN9CjsDrQtQt85e9W47ltIIaDae-fUkA
//     var cell2 = row.insertCell(1);
//     var cell2 = row.insertCell(2);
//     var cell2 = row.insertCell(3);
//     var cell2 = row.insertCell(4);
//     // cell1.innerHTML = "NEW CELL1";
//     // cell2.innerHTML = "NEW CELL2";
// }

$(document).ready(function(){
  $.getJSON("http://wt.ops.labs.vu.nl/api20/43e753ca/", function(data){
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

      //   addRow();
  //     $("td").append(field + " ");
      $( "#table1 td" )
      // .append( "Name: " + data[i].image )
      // .append( "Name: " + data[i].brand )
      // .append( "Name: " + data[i].model )
      .append( "Name: " + data[i].os )
      .append( "Time: " + data[i].screensize );


      // cell1.innerHTML= $( "#table1 td" ).append( data[i].os );
      // cell2.innerHTML = $( "#table1 td" ).append( data[i].screensize );

  

    });
  });
});






{/* <caption>Phone types</caption>
<tr> <!--defines a table row-->
    <th onclick="sortTable(table1, 0)">Image</th> <!--defines a table header-->
    <th onclick="sortTable(table1, 1)">Brand</th> 
    <th onclick="sortTable(table1, 2)"> Model</th> 
    <th onclick="sortTable(table1, 3)">OS</th>
    <th onclick="sortTable(table1, 4)">Screen Size</th>
</tr>
<tr>
    <td><input type="text" name="image" placeholder="Image URL" required></td> 
    <td><input type="text" name="brand" placeholder="Brand" required></td>
    <td><input type="text" name="model" placeholder="Model" required></td>
    <td><input type="text" name="os" placeholder="OS" required></td>
    <td><input type="text" name="screensize" placeholder="screen size" required></td>
</tr> */}