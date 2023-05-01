let baseUrl = 'https://915gtb1sth.execute-api.eu-west-1.amazonaws.com/v1';

export async function post(resource, body) {
  const data = await fetch(baseUrl + resource, {
    body: JSON.stringify(body),
    method: 'post',
    headers: { 'Content-Type': 'text/plain' },
  });
  return data;
}

export async function get(resource) {
  const data = await fetch(baseUrl + resource, {
    method: 'get',
    headers: { 'Content-Type': 'text/plain' },
  });
  const resultData = await data.json();

  return resultData;
}
