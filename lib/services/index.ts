import {request} from './_http';

export const GetOneUser = async () => {
  try {
    const response = await request('get', 'https://jsonplaceholder.typicode.com/posts/1');
    if (response) return response;
  } catch (err: any) {
    return err.message;
  }
};
