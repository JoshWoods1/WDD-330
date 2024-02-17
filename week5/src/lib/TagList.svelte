<script>
    export let tags = [];
  </script>
  
  <ul on:click>
    {#each tags as tag}
      <li>{tag}</li>
    {/each}
  </ul>
  
  <style>
    ul {
      display: flex;
      list-style-type: none;
    }
    li {
      padding: 0.2em 0.5em;
      border: 1px solid;
    }
  </style>
  