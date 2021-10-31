import { IItunesSearchRes, IItunesSearchResult } from "./IItunesSearchRes";

export const itunesSearch = async (search: string): Promise<IItunesSearchRes> => {
  try {
    return await fetch(
      `https://itunes.apple.com/search?term=${search}&entity=album`
    ).then((res) => res.json());
  } catch (e) {
    console.error("itunesSearch failed!");
    console.error(e);
    return {};
  }
};
