import Ember from 'ember';

export default Ember.Controller.extend({


    newBlog: Ember.computed(function(){
        let newBlog = {
            title: null,
            content: null
        };
        return newBlog
    }),


    // newBlog:


    // Editor Options
    mceOptions: {

        plugins: "link, image, hr",
        //menubar: "insert",
        //toolbar: "link",

        // For handling images - TODO -ensure safe images only
        file_picker_callback: function(field_name, url, type, win) {
            win.document.getElementById(field_name).value = 'my browser value';
        },

        browser_spellcheck: true
    },

    actions: {

        save(){
            let _this = this;
            let newBlog = this.get('newBlog');
            let title = newBlog.title;
            let content = newBlog.content;
            console.log(title);
            console.log(content);
            let blog = this.get('store').createRecord('blog', {
                title: title,
                content: content
            });
            blog.save().then(function(){
                alert(title + "\nblog saved");
                _this.transitionToRoute('blogs');
            });
        }

    }



});
