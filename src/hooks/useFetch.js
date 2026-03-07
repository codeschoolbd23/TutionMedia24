const UseFetch = (postData, bookName, path) => {
  console.log(postData);
  fetch(`https://sohopathi-server.vercel.app/${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if (result.acknowledged) {
        alert(`${bookName} is submitted successfully`);
      }
    });
};
export { UseFetch };
