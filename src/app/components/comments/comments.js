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

        // methods
        ctrl.getComments = getComments;
    };

    function getComments() {
        return true;
    }


}

export default comments;