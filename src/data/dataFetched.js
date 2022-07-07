const dataFetch = async () => {
  const response = await fetch('https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad');
  const jres = await response.json();
  return jres;
};


export default dataFetch;
