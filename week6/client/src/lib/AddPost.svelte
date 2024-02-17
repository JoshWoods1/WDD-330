<script>
    let title = '';
    let body = '';

    async function submitHandler() {
        // get form contents
        const data = {
            title: title,
            body: body
        };

        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        }
        // format as JSON and send to server
        const res = await fetch('http://localhost:3000/posts', options)
        const resText = await res.json();
        console.log(resText)

    }
</script>

<h2>Add Post</h2>

<form on:submit|preventDefault={submitHandler}>
  <p>
    <label for="title">Title</label>
    <input type="text" id="title" name="title" bind:value={title}/>
  </p>
  <p>
    <label for="body">Body</label>
    <textarea id="body" name="body" bind:value={body}></textarea>
  </p>
  <button>Submit</button>
</form>