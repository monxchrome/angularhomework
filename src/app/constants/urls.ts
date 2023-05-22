import {environment} from "../../environments/environment.development";

const {API} = environment;

const users = `${API}/users`
const posts = `${API}/posts`

const urls = {
  users: {
    full: users,
    byId: (id: number): string => `${users}/${id}`,
  },
  posts: {
    full: posts,
    byId: (id: number): string => `${posts}/${id}`,
  }
}

export {
  urls
}
