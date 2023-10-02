import { fetchJson } from '../../utils/fetch-json';
import { POSTS_URL } from '../../config/app-config';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}/count?${query}`;
  const numberOfPosts = await fetchJson<string>(url);
  return numberOfPosts;
};
