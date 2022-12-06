import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }: { request: Request }) => {
    try {
      const formData = await request.formData();
      const cardName = formData.get('card') as string;
  
      const cards = await PokemonTCG.findCardsByQueries({
        q: `name:"${cardName}"`
      });
  
      return {
        cards
      };
    } catch(err) {
      console.log(err);
    }
  }
};