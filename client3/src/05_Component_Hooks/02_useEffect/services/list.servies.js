export async function getList() {
  return fetch("http://localhost:3333/list").then((data) => data.json());
}

export async function setList(item) {
  return fetch("http://localhost:3333/list", {
    method: "POST",
    headers: {
        'Content-Type':'application/json'
    },
    body:JSON.stringify({item})
  }).then((data) => data.json());
}
