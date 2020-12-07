// https://yy8anrxy9l.execute-api.us-west-2.amazonaws.com/dev

///////////////////////////////////////

//Get User info from DynamoDB

async function getData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
// let userMatt = getData(
//   'https://yy8anrxy9l.execute-api.us-west-2.amazonaws.com/dev/compare-yourself/single/user_0.06261441555775282'
// ).then(data => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });
// console.log(userMatt);

//delet User singup info from the DynamoDB

///////////////////////////////////////
// async function deleteData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     headers: {
//       'Content-Type': 'application/json',
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }
// deleteData(
//   'https://yy8anrxy9l.execute-api.us-west-2.amazonaws.com/dev/compare-yourself',
//   deleteData
// ).then(data => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });

// const deleteUser = {
//   userid: 'User_0.21435152522260736',
// };

//Post User singup info to the DynamoDB

///////////////////////////////////////
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'allow',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.json())
    .then(result => {
      console.log('Sucess:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    }); // parses JSON response into native JavaScript objects
}
class Data {
  constructor(firstName, lastName, emailAddress, userPassword) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.userPassword = userPassword;
  }
}

const formElem = document.querySelector('.signupform');

const userData = new Data();
formElem.addEventListener('submit', e => {
  // on form submission, prevent default
  e.preventDefault();
  console.log('it is fired');

  // construct a FormData object, which fires the formdata event
});

document.querySelector('#send').addEventListener('click', e => {
  console.log('formdata fired');
  userData.firstName = document.querySelector('.firstName').value;
  userData.lastName = document.querySelector('.lastName').value;
  userData.emailAddress = document.querySelector('.emailAddress').value;
  userData.userPassword = document.querySelector('.password').value;
  console.log(userData);
  // submit the data via Fetch
  postData(
    'https://yy8anrxy9l.execute-api.us-west-2.amazonaws.com/dev/compare-yourself',
    userData
  );
  closeModal();
});
