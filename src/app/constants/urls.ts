import {environment} from "../../environments/environment.development";

let {API} = environment

const users = `${API}/users`

const urls = {
  users: {
    users,
    byId:(id: number): string => `${users}/${id}`
  }
}

export {
  urls
}
