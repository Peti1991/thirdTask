<script lang="ts">
    import z from "zod"

    const PetSchema = z.object({
    name: z.string(),
    animal: z.string(),
    isVaccinated: z.boolean()
    })

    let isShowingVaccinated = false

    type PetType = z.infer<typeof PetSchema>

    export let pet:PetType
</script>

<p>
    {pet.name}
</p>
<button on:click={()=> isShowingVaccinated = !isShowingVaccinated}>Toggle</button>
{#if isShowingVaccinated}
    <p>
        {pet.isVaccinated ? "Vaccinated" :"Isn't vaccinated"}
    </p>
{/if}
