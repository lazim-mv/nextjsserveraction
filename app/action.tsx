"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number): Promise<AnimeProp[]> => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();
  console.log(data);
  return data; // Assuming data is an array of AnimeProp objects
};

// export const fetchAnimeVideo = async (page: number) => {
//   const response = await fetch(
//     `https://shikimori.one//api/animes/:${}/roles`
//   );

//   const data = await response.json();
//   return data.map((item: AnimeProp, index: number) => (
//     <AnimeCard key={item.id} anime={item} index={index} />
//   ));
// };
