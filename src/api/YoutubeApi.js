import axios from 'axios';

const KEY= 'AIzaSyAfysdJ--IgXtw3W0GTyVILdBispkfVlfo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});
