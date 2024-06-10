// add mask in contact field
function maskContact(number) {
  if (number.value.length == 2) {
    number.value = "(" + number.value + ")";
  } else if (number.value.length == 9) {
    number.value += "-";
  }
}

// add mask in cnpj field
function maskCNPJ(cnpj) {
  if (cnpj.value.length == 2 || cnpj.value.length == 6) {
    cnpj.value += ".";
  } else if (cnpj.value.length == 10) {
    cnpj.value += "/";
  } else if (cnpj.value.length == 15) {
    cnpj.value += "-";
  }
}
