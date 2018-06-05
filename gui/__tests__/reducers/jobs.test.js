import reducer from 'connectors/redux/reducers'

describe('jobs reducer', () => {
  it('should return the initial state', () => {
    const state = reducer(undefined, {})

    expect(state.jobs).toEqual({
      items: {},
      currentPage: [],
      count: 0,
      fetching: false,
      networkError: false
    })
  })

  // describe('REQUEST_JOBS', () => {
  //   expect(state.jobs.fetching).toEqual(true)
  //   expect(state.jobs.networkError).toEqual(false)
  // })
})
