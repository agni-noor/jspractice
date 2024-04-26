function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John", age: 20 };
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log("Data received:", data);
}

fetchData(processData);
