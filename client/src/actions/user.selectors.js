import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectIsLoading = createSelector(
    [selectUser],
    user => user.isLoading
);

export const selectPurchasedItems = createSelector(
    [selectUser],
    user => user.purchasedItems
);

export const selectPurchaseSuccess = createSelector(
    [selectUser],
    user => user.purchaseSuccess
);

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectIsAuth = createSelector(
    [selectUser],
    user => user.currentUser.loginSuccess
)

export const selectIsUserLoaded = createSelector(
    [selectUser],
    user => !!user.currentUser
);

export const selectSignInError = createSelector(
    [selectUser],
    user => user.error
);

export const selectUserLogin = createSelector(
    [selectUser],
    user => user.message
);

export const selectError = createSelector(
    [selectUser],
    user => user.error
);

export const selectMessage = createSelector(
    [selectUser],
    user => user.message
);

export const selectUserVerified = createSelector(
    [selectUser],
    user => user.userVerified
);