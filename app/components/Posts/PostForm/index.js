import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fromJS } from 'immutable';
import { TitleContainer, BodyContainer, StyledTextField, SaveButton, CancelButton } from './styles';

class PostForm extends Component {

  static postState = () => fromJS({
    title: '',
    body: '',
  })

  static propTypes = {
    createPost: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    showForm: PropTypes.bool.isRequired,
  }

  state = {
    postState: PostForm.postState(),
  };

  onChange = (value, key) => {
    const postState =
      key === 'title' && value === '' ?
        this.state.postState.withMutations(map => {
          map.set(key, value).set('body', '');
        }) :
         this.state.postState.set(key, value);
    this.setState({ postState });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }


  createPost = () => {
    const { createPost } = this.props;
    console.log('createPost', createPost);
    createPost(this.state.postState.set('date', new Date()));
  }

  validateForm = () => this.state.postState.get('title') !== '';

  handleClose = () => this.props.handleClose(false);

  render() {
    console.log(this.state.postState.get('title'));
    return (
      <div>
        <Dialog
          open={this.props.showForm}
          onClose={this.handleClose}
        >
          <DialogTitle>POST</DialogTitle>
          <DialogContent>
            <TitleContainer>
              <StyledTextField
                label="Title"
                value={this.state.postState.get('title')}
                onChange={e => this.onChange(e.target.value, 'title')}
                margin="normal"
              />
            </TitleContainer>
            {this.validateForm() ? (
              <BodyContainer>
                <StyledTextField
                  label="Body"
                  value={this.state.postState.get('body')}
                  onChange={e => this.onChange(e.target.value, 'body')}
                  margin="normal"
                  disabled={!this.validateForm()}
                />
              </BodyContainer>
          ) : null}
          </DialogContent>
          <DialogActions>
            <SaveButton
              onClick={this.createPost}
              disabled={this.state.postState.get('body') === ''}
            >
            Save
            </SaveButton>
            <CancelButton onClick={this.handleClose}>
            Cancel
            </CancelButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default PostForm;
