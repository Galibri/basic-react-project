import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

let error = []

class Test extends Component {

    state = {
        post: []
    }

    componentDidMount() {
        axios.get( `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
            .then(response => {
                this.setState({
                    post: response.data
                })
            })
            .catch(err => error.push(err))
    }

    render() {
        return(
            <div className="row single-post">
                <div className="col-sm-8">
                    <div className="post-body">
                        <h2>{this.state.post.title}</h2>
                        <p>{this.state.post.body}</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <p>Love me or hate, I am here always.</p>
                    <Link exact to="/" className="btn btn-warning">Back to Home</Link>
                </div>
            </div>
        )
    }
}

export default Test