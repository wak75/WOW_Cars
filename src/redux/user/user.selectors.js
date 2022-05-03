import { createSelector } from 'reselect';

// const selectUser = (state)=>(state.user)

// //const selectCart = (state)=>(state.cart)


// //just to check the cart hidden camponent is working or not


// export const selectCurrentUser = createSelector(
//     [selectUser],// selectCart],
//     (user/*cart*/)=>user.selectCurrentUser
// )

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)


// export const UserName = createSelector(
//   [selectUser],
//   user=>user.currentUser
// )
