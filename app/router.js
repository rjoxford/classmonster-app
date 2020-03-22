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
        this.route('resources', function() {
          this.route('share');
          this.route('resource', {path: ':resource_id'});
          this.route('find');
        });
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
          this.route('select-objective');
          this.route('select-questions');
          this.route('select-examples');
        });
        this.route('gradebook', function() {
            this.route('student', {path: 'student/:student_id' }, function() {
              this.route('units');
            });
            this.route('unit', {path: 'unit/:unit_id'}, function() {
                this.route('objective', {path: 'objective/:objective_id'}, function() {
                  this.route('objective', function() {
                    this.route('resources', function() {});
                  });
                });
            });
        });
        this.route('assessments', function() {
          this.route('assessment', {path: ':assessment-group-record_id'});
          this.route('set');
        });
        this.route('course');
      });
      this.route('students', function() {});
  });



    //Scheme route
    //TODO move into a schoolbook route?
    this.route('schemes', function() {
        this.route('scheme', {path: ':scheme_id'}, function() {
            this.route('unit', {path: 'units/:unit_id'});
            this.route('edit');
        });
            this.route('new');
  });

  this.route('questions', function() {
      this.route('new');
  });
  this.route('schoolbook');

  //Users routes
  this.route('users', function() {
    this.route('user', function() {
      this.route('profile');
      this.route('resources');
      this.route('questions');
      this.route('blog');
    });
    this.route('me');
  });

  //TODO Delete/Refactor
  // this.route('students', function() {
  //   this.route('student');
  // });
  // this.route('students', function() {
  //   this.route('student', {path: ':student_id'});
  // });

  this.route('subjects', function() {
      this.route('subject', { path: ':subject_id' } , function() {});
  });

  // Question Player
  this.route('question-player', function() {
    this.route('question');
  });

  // Welcome Page
  this.route('welcome');

  // Blogs and blogging
  this.route('blogs', function() {
    this.route('blog', {path: ':blog_id'});
    this.route('edit');
  });

  // Assessment
  this.route('assessments', function() {
    this.route('new');
    this.route('assessment', {path: ':assessment_id'}, function() {
        this.route('edit', function() {
          this.route('objective', {path: 'aq/:assessment-question_id/objective'});
          this.route('question', {path: 'aq/:assessment-question_id/question'});
        });
    });
  });

  // Planner
  this.route('planner', function() {
    this.route('calendar');
    this.route('timetable', function() {
      this.route('edit-session', {path: 'edit-session/:session_id'});
    });
    this.route('year');
    this.route('month');
    this.route('week');
    this.route('term-times');
  });
});

export default Router;
