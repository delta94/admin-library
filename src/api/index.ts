export const createGETRequest = (url: string) => async () => {
  try {
    const res = await fetch(url, {
      credentials: 'include',
    });
    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};

export const createPOSTRequest = (url: string) => async (data: any) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};

export const createGetItemsRequest = (itemsUrl: string) => async (
  offset: number,
  limit: number,
) => {
  const url = `${itemsUrl}?Offset=${offset}&Limit=${limit}`;
  const request = createGETRequest(url);

  return await request();
};

export const createPublishItemRequest = (itemsUrl: string) => async (
  id: string | number,
) => {
  const url = `${itemsUrl}/${id}/publish`;

  const request = createPOSTRequest(url);

  return await request({});
};
