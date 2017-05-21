
import './_home.scss';

//HomeController.$inject = [''];

function HomeController() {
    const ctrl = this;

    // state
    ctrl.comments = [
        {
            avatar: 'http://bootdey.com/img/Content/user_1.jpg',
            name: 'Gerardo',
            comment: 'this is a comment',
            date: new Date()
        },
        {
            avatar: 'http://bootdey.com/img/Content/user_2.jpg',
            name: 'Elohim',
            comment: 'Behold my comments, because everything that exists, i gave it to you, my childs.',
            date: new Date()
        },
        {
            avatar: 'http://bootdey.com/img/Content/user_3.jpg',
            name: 'Robert De Niro',
            comment: `No matter how big a guy might be, Nicky would take him on. You beat Nicky with
                fists, he comes back with a bat. You beat him with a knife, he comes back with a gun.
                And you beat him with a gun, you better kill him, because he'll keep comin' back and
                back until one of you is dead.`,
            date: new Date()
        }
    ];

    //methods

}

export default HomeController;
