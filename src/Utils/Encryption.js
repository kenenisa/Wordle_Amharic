// console.log();
// SGVsbG8gV29ybGQ=
// > console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'))
// export const crypt = (text) => {
//   return Buffer.from(text).toString("base64");
// };
// export const decrypt = (bs64) => {
//   return Buffer.from(bs64, "base64").toString("utf8");
// };
export const crypt = (string) => {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint8Array(codeUnits.buffer));
};

export const decrypt = (binary) => {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint16Array(bytes.buffer));
};
