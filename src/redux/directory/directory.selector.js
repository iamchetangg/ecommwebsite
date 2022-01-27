

import { createSelector } from "reselect";

const selectDirectory = state => state.directory;



export const selectSectionsData = createSelector(
    [selectDirectory],
    (directory) => directory.sections
);