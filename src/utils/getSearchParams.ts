const getSearchParams = () => {
  // https://example.com?page=1&size=10
  var search = window.location.search;

  search = search.slice(1);
  const searchArr = search.split('&')

  const params: Record<string, string> = {}
  searchArr.forEach((search:string)=> {
    const [key, value] = search.split('=')
    params[key] = value
  });

  return params
};

export default getSearchParams;
