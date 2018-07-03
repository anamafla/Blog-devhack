import React, { Component } from 'react';
// import Tag from './Tag';
import TagForm from './TagForm';
import { StyledTable, StyledTableRow, StyledTableCell } from './styles';

const tagsData = [
  { id: 1, name: 'Technology', description: 'Artificial intelligence, Future, Programming, Cybersecurity, Data science' },
  { id: 2, name: 'Health', description: 'Psychology' },
  { id: 3, name: 'Science', description: 'Data science, Neuroscience' },
  { id: 4, name: 'Culture', description: 'Creativity, Media, Music, Film,Art' },
];

class Tags extends Component {

  state = {
    tags: [],
  };

  componentDidMount() {
    fetch('https://devhack-blog-api.herokuapp.com/tags')
      .then(response => response.json())
        .then(tags => this.setState({ tags }));
  }

  createTag = async tag => {
    const response = await fetch('https://devhack-blog-api.herokuapp.com/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tag.toJS()),
    });
  }

  deleteTag = async id => {
    const response = await fetch(`https://devhack-blog-api.herokuapp.com/tags/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  render() {
    // const tags = this.state.tags.map(tagData => (
      // <Tag key={tagData.id} name={tagData.name} description={tagData.description} />));

    return (

      <div>
        <TagForm createTag={this.createTag} />
        <br />
        <StyledTable>
          {this.state.tags.map(tagData => (
            <StyledTableRow key={tagData.id}>
              <StyledTableCell component="th" scope="row">
                {tagData.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {tagData.description}
              </StyledTableCell>
            </StyledTableRow>
             ))}
        </StyledTable>
      </div>
    );
  }
}

export default Tags;
