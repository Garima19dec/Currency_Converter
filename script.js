const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    alert("Choose Diffrent Currency");
  }
});

function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      ans.value = Object.values(val.rates)[0];
    });
}


// const select = document.querySelectorAll(".currency");
// const btn = document.getElementById("btn");
// const num = document.getElementById("num");
// const ans = document.getElementById("ans");

// fetch("https://v6.exchangerate-api.com/v6/ab4b42df8d2e574aa6740fa6/latest/USD")
//   .then((data) => data.json())
//   .then((data) => {
//     display(data.rates);
//     // .then(data => console.log(data.rates));
//   });

// // var requestOptions = {
// //   method: 'GET',
// //   redirect: 'follow'
// // };

// // fetch("http://api.exchangeratesapi.io/v1/latest?access_key=d26d0ef3cd539662c2e36970df15415e", requestOptions)
// //   .then(response => response.text())
// //   .then(result => console.log(result))
// //   .catch(error => console.log('error', error));

//   // fetch("https://api.exchangeratesapi.io/v1/convert?access_key=d26d0ef3cd539662c2e36970df15415e&from=GBP&to=JPY&amount=25")
//   // .then((data) => data.json())
//   // // .then((data) => {
//   // //   display(data)
//   //   .then(data => console.log(data));
//   // //});

// function display(data) {
//   const entries = Object.entries(data);
//   for (var i = 0; i < entries.length; i++) {
//     select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
//     select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
//   }
// }

// btn.addEventListener("click", () => {
//   let currency1 = select[0].value;
//   let currency2 = select[1].value;
//   let value = num.value;

//   if (currency1 != currency2) {
//     convert(currency1, currency2, value);
//   } else {
//     alert("Choose Different Currencies !!!");
//   }
// });

// function convert(currency1, currency2, value) {
//   console.log(currency1, currency2,value);

//   const host = "v6.exchangerate-api.com";
//   fetch(
//     `http://${host}&from=${currency1}&to=${currency2}&latest?amount=${value}`
//   )
//     .then((val) => val.json())
//     .then((val) => {
//       console.log(Object.values(val.rates)[0]);
//       ans.value = Object.values(val.rates)[0];
//     });
    
// }