 async function fetcher (...args: Array<any>) {
  const res = await fetch(...args);

  return res.json();
}

export default fetcher;
