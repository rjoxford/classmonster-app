import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

    //Catchall error
    this.route('catchall', {path: '/*wildcard'});

    //Login/Admin
    this.route('login');
    this.route('register');
    this.route('test');
    this.route('protected');

    //Schoolbook route, objectives and their
    this.route('objectives', function() {
        this.route('objective', {path: ':objective_id'}, function() {
          this.route('resources');
          this.route('questions', function() {
            this.route('new');
            this.route('question', {path: ':question_id'}, function() {
                this.route('edit');
            });
          });
          this.route('community-lesson');
          this.route('prerequisites');
        });
    });
    this.route('scores', function() {});

    //Your class route and associated tools.
    this.route('groups', {path: 'classes'}, function() {
        this.route('new');
        this.route('edit');

        this.route('group', {path: ':group_id' }, function(){
            this.route('students');
            this.route('seating-plan');
            this.route('feedback-sheets', function() {
                this.route('view');
            });
            this.route('gradebook', function() {
                this.route('student', {path: 'student/:student_id' });
                this.route('unit', {path: 'unit/:unit_id'}, function() {
                    this.route('objective', {path: 'objective/:objective_id'});
                });
            });
            this.route('assessments');
        });
        this.route('students', function() {});
    });



    //Scheme route
    //TODO move into a schoolbook route?
    this.route('schemes', function() {
        this.route('scheme', {path: ':scheme_id'}, function() {
            this.route('unit', {path: 'units/:unit_id'});
        });
    });

    this.route('questions', function() {
    this.route('new');
    });
    this.route('schoolbook');

    //User routes
    this.route('users', function() {
        this.route('user', function() {
          this.route('profile');
          this.route('resources');
          this.route('questions');
          this.route('blog');
        });
    });

    //Quick Question player routes
    this.route('quick-questions');

    //TODO Delete/Refactor
    this.route('students', function() {
      this.route('student');
    });
    this.route('students', function() {
      this.route('student', {path: ':student_id'});
    });

    this.route('subjects', function() {
        this.route('subject', { path: ':subject_id' } , function() {});
    });


});

export default Router;
