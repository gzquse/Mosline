import {Component} from "react";
import {connect} from "react-redux";
import {deletePost} from "../action/postAction";

class Post extends Component{
    // state = {
    //     post: null
    // }
    //
    // componentDidMount() {
    //     let id = this.props.match.params.post_id
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(
    //         res=>{
    //             this.setState({
    //                 post: res.data
    //             })
    //         }
    //     )
    //     // this.setState(
        //     {
        //         id
        //     }
        // )
    // }
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }

    render() {
        const post = this.props.post? (
            <div className="post">
                <h4 className='center'>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn red" onClick={this.handleClick}>delete</button>
                </div>
            </div>
        ):(
            <div className="container">
                loading....
            </div>
        )
        return(
            <div className='container'>
                {post}
            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    // get route params
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find( post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)