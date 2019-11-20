function calculate() {
  var ot = document.getElementById('Optimistic time').value;
  var rt = document.getElementById('Realistic time').value;
  var pt = document.getElementById('Pessimistic time').value;
  var result = document.getElementById('result');
  var myResult = (+ot + +rt*4 + +pt)/6;
  result.value = myResult;
}
