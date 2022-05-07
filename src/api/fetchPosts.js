const fetchPosts = async (pages, limit) => {
    // optionally write fetching logic here or somewhere else
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pages}&_limit=5`);
    if (!response.ok) {
        throw new Error("Something went wrong");
      }
  
      return  response.json();

}

export { fetchPosts }