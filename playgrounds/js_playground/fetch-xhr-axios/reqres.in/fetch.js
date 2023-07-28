const getBtn = document.querySelector(".get-btn");
const postbtn = document.querySelector(".post-btn");
const responseBox = document.querySelector(".response");

const sendHttpRequest = (method, url, data) => {
  return fetch(url).then(response => {
    return response.json();
  });
};

const getData = () => {
  return sendHttpRequest("GET", "https://reqres.in/api/users").then(
    responseData => {
      console.log(responseData);
      responseBox.innerText = responseData;
    }
  );
};

const sendData = () => {};

getBtn.addEventListener("click", getData);
postbtn.addEventListener("click", sendData);
