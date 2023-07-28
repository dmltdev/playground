const fetchBtn = document.querySelector(".fetch-btn");
const fetchUrl = document.querySelector(".fetch-url");
const fetchResponse = document.querySelector(".fetch-response");

function getFetchData(url) {
  fetch(url)
    .then(response => response.json())
    .then(commits => {
      fetchResponse.innerText = JSON.stringify(commits, null, 2);
      hljs.highlightElement(fetchResponse);
      console.log(commits);
    });
}

fetchUrl.addEventListener("focus", () => {
  if (fetchUrl.value === "") {
    fetchUrl.value = "http://";
  }
});

fetchBtn.addEventListener("click", () => {
  let url = fetchUrl.value;
  let urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  if (url.match(urlRegex)) {
    getFetchData(url);
  }else {
    alert("Invalid URL!");
  }
});
