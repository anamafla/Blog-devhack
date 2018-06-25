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
    tags: [...tagsData],
  };

  createTag = tag => {
    console.log(tag);
    const tagWithId = Object.assign({}, tag, { id: this.state.tags.length + 1 });
    const tags = this.state.tags.concat(tagWithId);
    this.setState({ tags });
    console.log(tags);
      // this.setState({ posts });
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
