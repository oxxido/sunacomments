import commentsCommentTemplate from './comments-comment.html';


const commentsComment = {
    templateUrl: commentsCommentTemplate,
    //controller: commentsController,
    bindings: {
        comment: '<'
    },
};

export default commentsComment;