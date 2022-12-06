<script type="ts">
  /** @type {import('./$types').PageData} */
  export let form;
  import { enhance } from '$app/forms';
</script>

<form method="POST" use:enhance>
  <input name="card" />
  <button>search</button>
</form>

{JSON.stringify(form?.cards)}
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
