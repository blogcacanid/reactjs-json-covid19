import React, { Component } from 'react';
import './GetCovidDatas.css'

class GetCovidDatas extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []          
        };
    }

    componentDidMount(){
        fetch("https://api.kawalcorona.com/indonesia/")
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol className="item">
                    {
                        posts.map(post => (
                            <li key={post.id} align="start">
                                <div>
                                    <p className="title">Negara : {post.name}</p>
                                    <p className="body">Positif : <em>{post.positif}</em></p>
                                    <p className="body">Sembuh : <em>{post.sembuh}</em></p>
                                    <p className="body">Meninggal : <em>{post.meninggal}</em></p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }
      
    }
  }
  
  export default GetCovidDatas;