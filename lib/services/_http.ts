export const request = async (method: string, url: string, data?: any, headers = {}) => {
  let response = await fetch(url, {
    method: method,
    body: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Language": "fr",
      //   Authorization: token ? `Bearer ${token}` : undefined,
      ...headers,
    },
  });
  response = await response.json();
  return response;
};
