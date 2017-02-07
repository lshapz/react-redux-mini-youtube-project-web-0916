import reducer from '../root-reducer.js'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        videos: [], 
        primaryVidId: "REu2BcnlD34"
      }
    )
  })
})
