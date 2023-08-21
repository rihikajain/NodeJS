// const placeorder = (callback) => {
//   setTimeout(() => {
//     console.log("order placed");
//     callback();
//   }, 2000);
// };

// const startproduction = (callback) => {
//   setTimeout(() => {
//     console.log("production started");
//     callback();
//   }, 5000);
// };

// const printid = (callback) => {
//   setTimeout(() => {
//     console.log("id printed");
//     callback();
//   }, 1000);
// };

// const productname = (callback) => {
//   setTimeout(() => {
//     console.log("product name printed");
//     callback();
//   }, 2000);
// };

// const productdesc = (callback) => {
//   setTimeout(() => {
//     console.log("product description printed");
//     callback();
//   }, 3000);
// };

// console.log("ordering products.......");
// placeorder(() => {
//   console.log("in production");
//   startproduction(() => {
//     console.log("printing items started");
//     printid(() => {
//       productname(() => {
//         productdesc(() => {
//           console.log("day ended");
//         });
//       });
//     });
//   });
// });

const placeorder = () => {
  return new Promise((resolve,reject)=> {
  setTimeout(() => {
    console.log("order placed");
    resolve();
  }, 2000);
});
};

const startproduction= () => {
  return new Promise((resolve,reject)=>{
  setTimeout(() => {
    console.log("production placed");
    resolve();
  }, 2000);
});
};

const printid = () => {
  return new Promise(( resolve,reject)=> {
  setTimeout(() => {
    console.log("printed");
    resolve();
  }, 2000);
});
};

const productname = () => {
  return new Promise(( resolve,reject)=> {
  setTimeout(() => {
    console.log("named");
    resolve();
  }, 2000);
});
};

const productdesc = () => {
  return new Promise((resolve,reject)=> {
  setTimeout(() => {
    console.log("description");
    resolve();
  }, 2000);
});
};

console.log("ordering products.......");
placeorder()
  .then(() => {
    console.log("product in production....");
    return startproduction();
  })

.then(() => {
    console.log("id printing started....");
    return printid();
  })

.then(() => {
    console.log("naming started....");
    return productname();
  })

.then(() => {
    console.log("description started....");
    return productdesc();
  })

.catch ((error) => {
  console.log("error!!!"+error);
});

