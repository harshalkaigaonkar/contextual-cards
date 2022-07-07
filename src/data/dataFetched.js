const dataFetch = async () => {
  const response = await fetch('https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17');
  const jres = await response.json();
  return jres;
};


export default dataFetch;
