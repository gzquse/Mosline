import React, {Component} from "react";
import Rainbow from "../hoc/Rainbow";
import axios from "axios"
import {Link} from "react-router-dom";
import Pokeball from "../pokeball.png"
import {connect} from "react-redux";

class Home extends Component{
    // state = {
    //     posts: [],
    // }
    // componentDidMount() {
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then(
    //         res=>{
    //             console.log(res.data)
    //             this.setState({
    //                 posts: res.data.slice(0,20)
    //             })
    //         }
    //     )
    // }

    render(){
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map((post) => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt='asd'/>
                        <div className="card-content red-text">
                            <Link to = {'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">do not have blogs</div>
        )
        return (
            <div>
                <div className="container home">
                    <h3 className="center">Home 界面</h3>
                    {postList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)