// const persona = {
//   peso: 65,
//   estatura: 1.8,
//   bmi: function () {
//     return this.peso / Math.pow(this.estatura, 2);
//   },
// };

const persona = {
  peso: 65,
  estatura: 1.8,
  bmi: function () {
    return this.peso / this.estatura ** 2;
  },
};

module.exports = {
  persona,
};
