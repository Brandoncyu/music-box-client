import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getAll, addArtist, removeArtist } from '../actions/artists'
import Header from './shared/Header'
import ArtistList from './artists/list'
import ArtistForm from './artists/form'

const mapStateToProps = ({artists}) => ({artists})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAll, addArtist, removeArtist
}, dispatch)

class App extends Component {
  componentDidMount() {
    this.props.getAll()
  }

  render() {
    return (
      <main>
        <Header />
        <section className="container">
          <div className="row">
            <div className="col">
              <h2 className="h4 text-center">All Artists</h2>
              <ArtistList artists={ this.props.artists } removeArtist={ this.props.removeArtist } />
            </div>
            <div className="col-4">
              <h2 className="h4 text-center">Add a new Artist</h2>
              <ArtistForm addArtist={ this.props.addArtist } />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
