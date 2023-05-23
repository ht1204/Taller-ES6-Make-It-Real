// const descifrar = (str, objWord) => {
//   for (let key in objWord) {
//     str = str.replace(new RegExp(key, 'g'), objWord[key]);
//   }

//   return str;
// };

// function descifrar(str, obj) {
//   for (let i = 0; i < str.length; i++) {
//     let keys = Object.keys(obj);
//     for (let j = 0; j < keys.length; j++) {
//       let key = keys[j];

//       if (str[i] == keys[j]) {
//         str[i] = keys[j];
//         str = str.replace(keys[j], obj[key]);
//       }
//     }
//   }
//   return str;
// }

const descifrar = (str, objWord) => {
  for (let key in objWord) {
    str = str.replace(key, objWord[key]);
  }

  return str;
};


module.exports = {
  descifrar,
};
