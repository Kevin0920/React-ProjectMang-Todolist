import React, { Component } from 'react';


class ProjectItem extends Component {

    deleteProject(id) {
        // console.log('delete');
        this.props.onDelete(id);
    }

    render() {
        // console.log(this.props);
        return ( 
            <li  className = "ProjectItem" >
                <strong> {
                    this.props.project.title
                } </strong> - {this.props.project.category}
                <a herf="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
            </li>
        ); 
    }
}

export default ProjectItem;
