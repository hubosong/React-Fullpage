export const cpfMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const cnpjMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const cepMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

export const telMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
}

export const getDate = () => {
  var today = new Date();
  var dy = today.getDate();
  var mt = today.getMonth() + 1;
  var yr = today.getFullYear();
  if (mt < 10) {
    mt = '0' + mt;
  }
  if (dy < 10){
    dy = '0' + dy;
  }
  return dy + '/' + mt + '/' + yr
}

export const getTime = () => {
  var today = new Date(); 
  var hours = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  return hours + ':' + min + ':' + sec
}

