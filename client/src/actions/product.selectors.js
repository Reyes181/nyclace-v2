import {createSelector} from 'reselect';

const selectPrdoucts = state => state.products;

export const selectProducts = createSelector(
    [selectPrdoucts],
    products => products !== null ? products.getProd : []
);

export const selectIsProductFetching = createSelector(
    [selectPrdoucts],
    products => products.isFetching
);

export const selectIsProductLoaded = createSelector(
    [selectPrdoucts],
    products => !!products.getProd
);

export const selectIsArrivalLoaded = createSelector(
    [selectPrdoucts],
    products => !!products.byArrival
);

export const selectArrival = createSelector(
    [selectPrdoucts],
    products => products !== null ? products.byArrival : []
);

export const selectByBrandLoaded = createSelector(
    [selectPrdoucts],
    products => !!products.byBrand
);

export const selectByBrand = createSelector(
    [selectPrdoucts],
    products => products !== null ? products.byBrand : []
);

export const selectDetailLoaded = createSelector(
    [selectPrdoucts],
    products => !!products.getProdDetail
);

export const selectDetail = createSelector(
    [selectPrdoucts],
    products => products !== null ? products.getProdDetail : []
);

export const selectRandomLoaded = createSelector(
    [selectPrdoucts],
    products => !!products.getRandom 
);

export const selectRandom = createSelector(
    [selectPrdoucts],
    products => products !== null ? products.getRandom : []
);

export const selectAllBrandProdLoaded = createSelector(
    [selectPrdoucts],
    products => !!products.brandProducts
);

export const selectAllBrandProd = createSelector(
    [selectPrdoucts],
    products => products !== null ?  products.brandProducts : []
);

export const selectFilterLoaded = createSelector(
    [selectPrdoucts],
    products => !!products.filteredProd
);

export const selectFilter = createSelector(
    [selectPrdoucts],
    products => products !== null ? products.filteredProd : []
);

export const selectModelLoaded = createSelector(
    [selectPrdoucts],
    products => !!products.brandModels
);

export const selectModel = createSelector(
    [selectPrdoucts],
    products => products !== null ? products.brandModels : []
);

export const selectBrandName = createSelector(
    [selectPrdoucts],
    products => products.brandName
)