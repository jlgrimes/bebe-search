<script type="ts">
  /** @type {import('./$types').PageData} */
  export let form;
  import { enhance } from '$app/forms';
  import { ButtonGroup, Input, ListPlaceholder, Button } from 'flowbite-svelte';

  let clicked = false;
  let selectedCardUrl: string;
</script>


<div class={clicked ? 'card-search-input card-search-input__clicked' : 'card-search-input card-search-input__not-clicked'}>
  <form method="POST" use:enhance>
    <div>
      <ButtonGroup class="w-96 ml-1 shadow-lg" size="lg">
        <Input name="card" placeholder="Search for a Pokemon" />
        <Button gradient color="purpleToBlue" type="submit" on:click={() => {
          clicked = true;
          form = null;
        }}>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>  
        </Button>
      </ButtonGroup>
    </div>
  </form>
</div>

<div class="card-list">
  {#if !form?.cards && clicked}
    <ListPlaceholder />
  {/if}
  {#if form?.cards}
    {#each form?.cards.reverse() ?? [] as card}
      <img class="card" src={card.images.small} on:click={() => selectedCardUrl = card.images.large} />  
    {/each}
  {/if}
</div>

{#if selectedCardUrl}
  <img class='selected-card' src={selectedCardUrl} on:click={() => selectedCardUrl = null} />
  <div class="selected-card-overlay" on:click={() => selectedCardUrl = null}></div>
{/if}

<style>
  .card-list {
    display: flex;
    flex-wrap: wrap;
    padding: 1vw;
  }
  .card {
    width: 49vw;
  }

  .selected-card {
    position: fixed;
    top: 6vh;
    left: 0;
    z-index: 6;
    width: 100vw;
  }

  .selected-card-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 5;
  }

  .card-search-input {
    position: fixed;
    z-index: 5;
  }

  .card-search-input__not-clicked {
    margin-top: 40vh;
  }

  .card-search-input__clicked {
    margin-top: 80vh;
    animation-duration: 0.7s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      margin-top: 40vh;
    }

    to {
     margin-top: 80vh;
    }
  }
</style>