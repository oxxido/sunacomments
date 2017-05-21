import comments from './comments/comments';

const components = angular.module('components', [])
    .component('comments', comments)
    ;

export default components;
