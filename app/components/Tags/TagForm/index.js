import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NameContainer, DescriptionContainer, StyledTextField, SaveButton, StyledTable, StyledTableRow } from './styles';


class TagForm extends Component {

  static propTypes = {
    createTag: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    description: '',
  }

  onChange = (value, key) => this.setState({ [key]: value });

  createTag = () => {
    console.log('Here in create Tag');
    const { createTag } = this.props;
    console.log('createTag', createTag);
    createTag({ ...this.state });
  }

  validateForm = () => this.state.name !== '';

  render() {
    console.log(this.state.name);
    console.log(this.state.description);
    return (
      <div>
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
        <div>
          <SaveButton onClick={this.createTag}>
            Save
          </SaveButton>
        </div>
      </div>
    );
  }

}
export default TagForm;
