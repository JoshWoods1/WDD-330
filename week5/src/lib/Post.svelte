<script>
    import TagList from "./TagList.svelte";
    export let post = {};
  </script>
  
  <h2>
    {post.title}
  </h2>
  <TagList tags={post.tags} />
  <p>
    {post.body}
  </p>
  