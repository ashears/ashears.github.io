function calculate() {
  var ot = document.getElementById('optimistic_time').value;
  var rt = document.getElementById('realistic_time').value;
  var pt = document.getElementById('pessimistic_time').value;
  var result = document.getElementById('result');
  var myResult = (+ot + +rt*4 + +pt)/6;
  result.value = myResult;
}
