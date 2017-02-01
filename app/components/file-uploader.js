import EmberUploader from 'ember-uploader';
import Ember from 'ember';

export default EmberUploader.FileField.extend({
    filesDidChange: function(files) {
        const uploader = EmberUploader.Uploader.create({
            url: this.get('url')
        });

        if (!Ember.isEmpty(files)) {
            uploader.upload(files[0]);
        }
    }
});
