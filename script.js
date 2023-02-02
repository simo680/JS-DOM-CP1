
function NumberTable(stroka, stolbec) {
  let arr = [];
  let a = 0;
  for (i = 0; i < stroka * stolbec; i++) {
  arr.push(Math.floor(Math.random() * 100))
  }
  var tab = "<table>"
  for (var i = 0; i < stolbec; i++) {
  tab += "<tr>";
  for (var j = 0; j < stroka; j++) {
  if (arr[a] < 50) {
  tab += "<td>" + arr[a] + "</td>";
  } else {
  tab += `<td style="
  background-color: orange;">` + arr[a] + "</td>";
  }
  a++
  }
  tab += "</tr>";
  }
  return tab + "</table>";
  }
  document.write(NumberTable(6, 5));
  