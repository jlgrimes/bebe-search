<script type="ts">
  /** @type {import('./$types').PageData} */
  export let form;
  import { enhance } from '$app/forms';
  import { ButtonGroup, Input, InputAddon, Button } from 'flowbite-svelte';

  let clicked = false;
</script>

<div class={clicked ? 'card-search-input__clicked' : 'card-search-input__not-clicked'}>
  <form method="POST" use:enhance>
    <ButtonGroup class="w-full">
      <Input name="card" />
      <Button color="blue" type="submit" on:click={() => clicked = true}>Search</Button>
    </ButtonGroup>
  </form>
</div>

<div class="card-list">
  {#each form?.cards.reverse() ?? [] as card}
    <img class="card" src={card.images.small} />  
  {/each}
</div>

<style>
  .card-list {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    width: 47vw;
  }

  .card-search-input__not-clicked {
    margin-top: 50%;
  }

  .card-search-input__clicked {
    animation-duration: 0.75s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      margin-top: 50%;
    }

    to {
     margin-top: 0;
    }
  }
</style>