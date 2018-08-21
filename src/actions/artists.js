import {get, add, remove} from '../models/artists'

export const GET_ARTISTS = 'GET_ARTISTS'

export const getAll = () => {
  return async (dispatch) => {
    const payload = await get()
    dispatch({
      type: GET_ARTISTS,
      payload
    })
  }
}

export const addArtist = (name, genre) => {
  return async (dispatch) => {
    const added = await add(name, genre)
    if (added){
      const payload = await get()
      dispatch({
        type: GET_ARTISTS,
        payload
      })
    }
  }
}


export const removeArtist = (id) => {
  return async (dispatch) => {
    const removed = await remove(id)
    if (removed){
      const payload = await get()
      dispatch({
        type: GET_ARTISTS,
        payload
      })
    }
  }
}
