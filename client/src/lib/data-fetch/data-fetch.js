export const getResource = async (resource) => {
    const url = resource ? `/api/${resource}` : '/express_backend';
    const response = fetch(url)
      .then((resp) => resp.json())
      .catch((err) => console.log(`Error in fetching ${resource}`, err));
    return response;
  };
  