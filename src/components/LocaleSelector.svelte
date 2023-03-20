<script>
  import { createEventDispatcher } from "svelte";
  import { locales } from "../config/l10n";

  export let value;

  const dispatch = createEventDispatcher();

  function handleLocaleChange(event) {
      event.preventDefault();
      dispatch("locale-changed", event.target.value);
  }
</script>

<style>
  .locale-selector {
      display: flex;
      justify-content: center;
  }

  .select { 
    margin: 0 1rem 1rem;   
  }
  select {
    padding-right: 2.5em;
    cursor: pointer;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: 0;
    background-color: #fff;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #363636;
    height: 2.5em;
  }
</style>

<div class="locale-selector">
  <div class="select">
    <select value={value} on:change={handleLocaleChange}>
      {#each Object.keys(locales) as locale}
        <option value={locale}>{locales[locale]}</option>
      {/each}
    </select>
  </div>
</div>