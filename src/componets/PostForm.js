import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    changeHandler = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        });
    }

    submitHandler = e => {
        e.preventDefault();

        const post = {
            title: e.target.title.value,
            body: e.target.body.value
        }
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h3>Post Form</h3>
                <hr />
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="title" onChange={this.changeHandler} />
                    <input type="text" name="body" onChange={this.changeHandler} />
                    <button type="submit">submit</button>
                </form>

            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts
})

export default connect(mapStateToProps, { createPost })(PostForm);
