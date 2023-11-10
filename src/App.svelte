<script lang="ts">
  import { getClients } from "./api/index";
  import { type ClientType } from "./api/index";
  import Client from "./components/Client.svelte";
  let clients:ClientType[] = []

  let search = ""
  let isButtonDisabled = true

  $: {
    if (search.length > 2) {
      isButtonDisabled = false
    }else {
      isButtonDisabled = true
    }
  }

  let isShowingClients = false


  

  const getSearchedClients = async () => {
    isShowingClients = false
    let response = await getClients(search)
    if (!response.success) {
      return alert(`Could not data: (${response.status})`)
    }
    clients = response.data

    isShowingClients = true
  }

</script>

<header>
  Veterinarian admin - clients
</header>

<input type="text" bind:value={search} >
<button disabled={isButtonDisabled} on:click={getSearchedClients}>search</button>
<div class=" flex flex-row">
  {#if isShowingClients}
    {#each clients as client}
      <Client {client}/>
    {/each}
  {/if}
</div>