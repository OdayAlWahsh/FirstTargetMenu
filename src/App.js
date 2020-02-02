import React, { Component } from 'react'
import axios from "axios";


const Tree = ({ data }) => (

  <ul className="list-unstyled">

    {data && data.map((item, index) => (
      <li key={index} className="active">


        <a href={`#${item.title}`} data-toggle="collapse" aria-expanded="false" className={item.children.length > 0 ? 'dropdown-toggle' : ''} 
        onClick={(e)=>{
          e.preventDefault();
          console.log(item.title)
          
    }
        }>
          {item.title}
       </a>

        <div href={`#${item.title}`} className={item.title != 'Sub Users 1' ? 'collapse' : ''}  id={item.title}>

          {item.children && <Tree data={item.children} />}
        </div>
 
      </li>
    ))}



  </ul>



);
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };
  }
  componentDidMount() {
    axios
      .get("http://demo9606913.mockable.io/menu")
      .then(res => {

        this.setState({ list: res.data });


      });

  }
  render() {
    return (
      <div className="wrapper">

        <div className="content">
          <a className="btn btn-primary btn-customized open-menu" href="#" role="button">
            <i className="fas fa-align-left" /> <span>Menu</span>
          </a>
        </div>

        <nav className="sidebar" >

          <div className="dismiss">
            <i className="fas fa-arrow-left" />
          </div>

          <div style={{ margin: 50 }} >
            <a></a>
          </div>

          <Tree data={this.state.list} />
        </nav>

      </div>
    )
  }
}
