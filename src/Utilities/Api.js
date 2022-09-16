import axios from 'axios';

let host = "https://www.anapioficeandfire.com";


const Api={
    getBooks: (page, success) => {
        axios.get(`${host}/api/books?page=${page}`) 
        .then(res => {
            success(res);
        })
    }
}
export default Api;