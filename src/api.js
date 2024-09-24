// api.js
export const promise1 = (i) => {
  let time = Math.floor(Math.random() * 4) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: i,
        time,
      });
    }, time * 1000);
  });
};

export const promise2 = (id) => {
  let time = Math.floor(Math.random() * 3) + 1.5;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "name" + id,
      });
    }, time * 1000);
  });
};
