let nextContainerId = 0
export const addContainer = text => ({
  type: 'ADD_CONTAINER',
  id: nextContainerId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const deleteContainer = id => ({
  type: 'DELETE_CONTAINER',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
