/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const cardName = formData.get('card');
    console.log(cardName)

    const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${cardName}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const cards = await res.json();
    return {
      cards
    };
  }
};