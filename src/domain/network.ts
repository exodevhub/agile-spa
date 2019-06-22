const endpoint = 'http://localhost:3000';

export function getMessageList() {
  return fetch(`${endpoint}/messages`)
    .then(res => res.json());
}

export function sendComment(data: { username: string, content: string }) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  return fetch(`${endpoint}/messages`, options);
}