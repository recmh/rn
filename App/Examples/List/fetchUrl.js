const status = response => {
  if (response.status >= 400) {
    throw new Error('Bad response from server');
  }
  return response.json();
};

const timeout = t => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      reject('Network timeout');
    }, t),
  );
};

export default function fetchUrl(...params) {
  return new Promise.race([fetch(...params).then(status), timeout(10000)]);
}
