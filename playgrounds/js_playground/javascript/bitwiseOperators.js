// ^ sets each bit to 1 if both bits are 1
// 1 = 00000001
// 2 = 00000010
// R = 00000011 (decimal 3)
console.log(1 | 2);
// & sets each bit to 1 if both bits are 1
// 1 = 00000001
// 2 = 00000010
// R = 00000000 (decimal 0)
console.log(1 & 2);
// 2 = 00000010
// 3 = 00000011
// R = 00000010 (decimal 2)
console.log(2 & 3);
// ^ sets each bit to 1 if only one of two bits is 1
// 2 = 00000010
// 3 = 00000011
// R = 00000001 (decimal 1)
console.log(2 ^ 3);
// ~ inverts all bits: zeros become ones, ones become zeros
// 1 = 00000000000000000000000000000001
// R = 11111111111111111111111111111110 (decimal -2)
console.log(~1);
// << "zero fill left shift" shifts left by pushing zeros in from the right
// and let the leftmost bits fall of
// 2 = 00000000000000000000000000000010
// 3 = 00000000000000000000000000000011
// R = 00000000000000000000000000010000 (decimal -2)
// 2 * ( 2 ** 3) = 2 * 8 = 16 | Formula : num1 * (2 ** num2)
console.log(2 << 3);

// For testing
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
function bin2dec(bin) {
    return parseInt(bin, 2);
}
console.log(dec2bin(16));
console.log(bin2dec(11111111111111111111111111111110));