import { render } from '@testing-library/react';
import React from 'react';
import YoutubeApi from '../api/YoutubeApi';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component{
    state = {videos: [], selectedVideo: 'null'};


    onTermSubmit = async term =>{
       const response = await YoutubeApi.get('/search',{
            params: {
                q: term
            }            
        });
    
        this.setState({videos: response.data.items});
    }
    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video});
    };
    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
            />

            </div>
            
            );
    }
}

export default App;