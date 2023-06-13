// made seperate fetchers folder for code re-use

export const handleSendingNewPost = async (token, message, url) => {
    // try catch are essential for async fucntions for cathing errors
    try {
      const response = await fetch(`${url}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ message: message })
      });
      const data = await response.json();
      return data
    } catch(e) {
      console.log(e)
    }
}

export const fetchPosts = (token, setToken, setPosts) => {
    if(token) {
      return fetch("/posts", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          setPosts(data.posts);
        })
    }
}

export const handleSendingNewLike = async (token, post, url) => {
  try {
      await fetch(`${url}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        postId: post._id,
      })
    });
  } catch(e) {
    console.log(e)
  }
}