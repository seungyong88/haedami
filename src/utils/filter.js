// 숫자 (,)콤마 추가
export function numberFormat(value) {
  if (value === undefined) {
    return null;
  }
  var num = new Number(value);
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
}