import { makeAutoObservable } from "mobx";
import axios from "axios";

class MovieStore {
    movieList = [];

    constructor() {
        makeAutoObservable(this)
    }
    
    // 获取电影列表
    async setMovieList(){
        const res = await axios.get('https://mock.presstime.cn/mock/65a9154bb02591272cc21c5a/movie/movieList');
        console.log(res);
        this.movieList = res.data.movieList;
    }
    
    // 添加电影
    addMovie = (movie) => {
        this.movieList.push(movie);
    }
}

const movieStore = new MovieStore();
export default movieStore;