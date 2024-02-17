<script>
    let posts = [];
    async function getPosts() {
        const response = await fetch('http://localhost:3000/posts');
        posts = await response.json();
    }

    getPosts()
</script>

{JSON.stringify(posts)}