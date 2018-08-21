import {
  GET_ARTISTS,
  GET_ARTISTS_FAILED
} from '../actions/artists'

function artists (state = [], {type, payload}){
  switch (type){
    case GET_ARTISTS:
      return payload
    default:
      return state
  }
}

export default artists
