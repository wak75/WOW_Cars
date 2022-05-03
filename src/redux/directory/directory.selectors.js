import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
)


// export const selectDirectorySection = createSelector(
//     [SelectDirectory],
//     (directory)=>(directory.sections)
// )
