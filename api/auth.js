import * as axios from 'axios'

const axi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: true,
    headers: {
        'X-Custom-Header': 'foobar'
    },
    params: {
        ID: 12345
    },
})

const axi2 = axios.create({
    baseURL: 'https://reqres.in/api/',
})

export const authAPI = {

    // getPost (postId) {
    //     axi.get('posts/' + postId)
    //     .then( response => response.json() )
    //     .then( response => response )
    // }

    async getPost(postId) {
        try { return await axi.get('posts/' + postId) }
        catch (error) { console.error(error) }
    }
}

