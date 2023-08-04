const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

// Promise.race() accepts an iterable of promises and resolves/rejects based on the first promise that settles.
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  },
);

// Promise.all() accepts an iterable of promises and returns a single promise that fulfills when all of the input's promises fulfill.
// It rejects when any of the input's promises rejects, with this first rejection reason.
Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  },
);
