import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fromJS } from 'immutable';
import { NameContainer, DescriptionContainer, StyledTextField, SaveButton, CancelButton } from './styles';


class TagForm extends Component {

  static propTypes = {
    createTag: PropTypes.func.isRequired,
  }

  static tagState = () => fromJS({
    name: '',
    description: '',
  })

  state = {
    tagState: TagForm.tagState(),
    open: false,
  };


  onChange = (value, key) => {
    const tagState = this.state.tagState.set(key, value);
    this.setState({ tagState });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  createTag = () => {
    console.log('Here in create Tag');
    const { createTag } = this.props;
    console.log('createTag', createTag);
    createTag(this.state.tagState);
  }

  validateForm = () => this.state.tagState.get('name') !== '';

  render() {
    console.log(this.state.tagState.get('name'));
    console.log(this.state.tagState.get('description'));

    return (
      <div>
        <button onClick={this.handleClickOpen}>New Tag</button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>TAG</DialogTitle>
          <DialogContent>
            <NameContainer>
              <StyledTextField
                label="Name"
                value={this.state.name}
                onChange={e => this.onChange(e.target.value, 'name')}
                margin="normal"
              />
            </NameContainer>
            <DescriptionContainer>
              <StyledTextField
                label="description"
                value={this.state.description}
                onChange={e => this.onChange(e.target.value, 'description')}
                margin="normal"
                disabled={!this.validateForm()}
              />
            </DescriptionContainer>
          </DialogContent>
          <DialogActions>

            <SaveButton onClick={this.createTag}>
            Save
            </SaveButton>
            <CancelButton onClick={this.handleClose} >
              Cancel
            </CancelButton>

          </DialogActions>
        </Dialog>
      </div>
    );
  }

}
export default TagForm;
