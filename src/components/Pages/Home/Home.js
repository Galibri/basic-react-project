import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

let error = []

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(err => error.push(err))
    }

    render() {
        if(this.state.posts.length < 50) {
            return <h2 className="text-center">Loading...</h2>
        } else {
            return (
                <div className="card">
                    <ul className="list-group list-froup-flush">
                        {this.state.posts.map((post, key) => <li key={key} className="list-group-item bg-dark text-light"><Link className="d-block" to={{pathname: "/post/" + post.id}}>{post.title}</Link></li>)}
                    </ul>
                </div>
            )
        }
    }
}

export default Home