import './_comments.scss';
import commentsTemplate from './comments.html';

/**
 *  Example Usage:
 *  <comments
 *      comments="yourCtrl.comments"     * comments object
 *  </comments>
 */

const comments = {
    templateUrl: commentsTemplate,
    controller: commentsController,
    bindings: {
        comments: '<'
    },
};

// commentsController.inject = [''];

function commentsController() {
    const ctrl = this;

    ctrl.$onInit = function() {
        ctrl.isEditing = false;
        ctrl.newComment = '';

        // methods
        ctrl.postComment = postComment;
    };


    function postComment() {
        ctrl.comments.push({
            name: 'Visitor',
            comment: ctrl.newComment,
            avatar: 'http://placehold.it/50x50',
            date: new Date(),
        });
        ctrl.newComment = '';
    }


}

export default comments;