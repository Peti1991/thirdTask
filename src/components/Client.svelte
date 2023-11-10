<script lang="ts">
    import { type ClientType } from "../api/index";
    export let client:ClientType
    import PetTag from "./PetTag.svelte";
    import { UpdateVaccinated } from "../api/index";
    let isLoading = false

    const toggle = async (name: string, isVaccinated: boolean) => {
        isLoading = true
        let response = await UpdateVaccinated(name , isVaccinated)
        isLoading = false
        if (!response.success) {
            return alert(`Could not load: (${response.status})`)
        }
        
        
    }

</script>

<div>
    <h1>{client.name}</h1>
    <div>
        {#each client.pets as pet}
            <p>{pet.name}</p>
            <p>{pet.animal}</p>
            <p><button on:click={() => {
                pet.isVaccinated = !pet.isVaccinated
                toggle(pet.name, !pet.isVaccinated)
                }}>
                    Toggle
                </button> 
                {isLoading ? "..." : pet.isVaccinated ? "Vaccinated" :"Isn't vaccinated"}
            </p>
        {/each}
    </div>
</div>



