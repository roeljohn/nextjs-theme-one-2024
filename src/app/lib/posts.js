export async function getPosts() {
    const res = await fetch('http://localhost/api/wp-json/wp/v2/posts', { cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
}

export async function getUserPost(author){

    const res = await fetch(`http://localhost/api/wp-json/wp/v2/users/${author}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
}