<script type="ts">
  /** @type {import('./$types').PageData} */
  export let form;
  import { enhance } from '$app/forms';

  let clicked = false;
</script>

<div class={clicked ? 'card-search-input__clicked' : 'card-search-input__not-clicked'}>
  <form method="POST" use:enhance>
    <input name="card" />
    <button on:click={() => clicked = true}>search</button>
  </form>
</div>

<div class="card-list">
  {#each form?.cards ?? [] as card}
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