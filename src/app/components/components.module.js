import comments from './comments/comments';
import commentsComment from './comments/comments-comment';

const components = angular.module('components', [])
    .component('comments', comments)
    .component('commentsComment', commentsComment)
    ;

export default components;
