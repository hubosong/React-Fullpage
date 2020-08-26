import React from 'react'

export default props => {
  return (
    <aside className="col s12 m6 l3">
      <h5 className="light">More READS</h5>

      <ul className="collection">
        <li className="collection-item avatar">
          <img src="images/background2.jpg" alt="" className="circle" />
          <span className="title">Title</span>
          <p>First Line <br />
                     Second Line
                  </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <span className="title">Title</span>
          <p>First Line <br />
                     Second Line
                  </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle green">insert_chart</i>
          <span className="title">Title</span>
          <p>First Line <br />
                     Second Line
                  </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle red">play_arrow</i>
          <span className="title">Title</span>
          <p>First Line <br />
                     Second Line
                  </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      </ul>

      <h5 className="light">About Author</h5>
      <div className="card blue-grey darken-1 center">
        <div className="card-content white-text">
          <img src="images/background1.jpg" className="circle responsive-img" alt="" />
          <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </aside>
  )
}