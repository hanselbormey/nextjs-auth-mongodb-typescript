type FetchData = {
  args: any[];
};

export default async function (...args: Array<any>) {
  const res = await fetch(...args);

  return res.json();
}
