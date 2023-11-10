<script lang="ts">
    import { type ClientType } from "../api/index";
    export let client:ClientType
    import PetTag from "./PetTag.svelte";
    import { UpdateVaccinated } from "../api/index";

    const toggle = async (name: string, isVaccinated: boolean) => {
        
        let response = await UpdateVaccinated(name , isVaccinated)
        if (!response.success) {
            return alert(`Could not load messages (${response.status})`)
        
    }
    }

</script>

<div>
    <h1>{client.name}</h1>
    <div>
        {#each client.pets as pet}
            <button></button>
            <p>{pet.name}</p>
            <p>{pet.animal}</p>
            <p><button on:click={() => pet.isVaccinated = !pet.isVaccinated}>Toggle</button> {pet.isVaccinated ? "Vaccinated" :"Isn't vaccinated"}</p>
        {/each}
    </div>
</div>



