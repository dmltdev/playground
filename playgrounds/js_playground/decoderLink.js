let privateKeyElement = Array.from(document.querySelectorAll('span[data-v-cc17c02e]')).find(element => element.innerHTML.includes("PRIVATE KEY"));
let privateKeyContents = privateKeyElement ? privateKeyElement.innerHTML : "Private key not found.";
console.log(privateKeyContents);

navigator.clipboard.writeText(privateKeyContents)
  .then(() => {
    console.log('Private key copied to clipboard');
  })
  .catch((error) => {
    console.error('Failed to copy private key to clipboard due to browser restrictions:', error);
  });