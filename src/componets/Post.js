import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';
import PropTypes from 'prop-types'


class Post extends React.Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {

        return (
            <div>
                <ul>
                    {this.props.posts.map(el => (
                        <li key={el.id}>
                            <h3>{el.title}</h3>
                            <p>{el.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}


const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Post);
