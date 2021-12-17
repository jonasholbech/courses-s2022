const payLoad = {
  header: "This is awesome",
  body: "sure is",
};
const id = 49;
const postData = JSON.stringify(payLoad);

fetch(`/endpoint/${id}`, {
  method: "put",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: postData,
})
  .then((res) => res.json())
  .then((d) => {
    console.log(d);
  });
