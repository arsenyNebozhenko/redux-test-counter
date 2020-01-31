export const increment = () => ({
  type: 'INCREMENT'
})

export const decrement = () => ({
  type: 'DECREMENT'
})

export const changeValue = (num) => ({
  type: 'CHANGE_VALUE',
  payload: {
    by: num
  }
})
