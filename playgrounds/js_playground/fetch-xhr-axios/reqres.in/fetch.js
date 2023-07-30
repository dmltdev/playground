const getBtn = document.querySelector(".get-btn");
const postbtn = document.querySelector(".post-btn");
const responseBox = document.querySelector(".response");

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": "application/json" } : {},
  }).then(response => {
    if (!response.ok) {
      return response.json().then(errResData => {
        const error = new Error("Something went wrong!");
        error.data = errResData;
        throw error;
      });
    }
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

const sendData = () => {
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    // password: "pistol",
  })
    .then(responseData => {
      console.log(responseData);
      responseBox.innerText = responseData;
    })
    .catch(err => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
postbtn.addEventListener("click", sendData);
