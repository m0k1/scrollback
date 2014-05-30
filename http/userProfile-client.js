//user profile settings
var formField = require("../lib/formField.js");
libsb.on('pref-show', function(tabs, next){
    var div = $('<div>').addClass('list-view list-view-profile-settings');
    div.append(formField("About me", "area", "about-me", tabs.user.description));
    tabs.profile = {
            html: div,
            text: "Profile",
            prio: 1000
    }
    next();
});

libsb.on('pref-save', function(conf, next){
	var about = $('#about-me').val();
	conf.aboutMe = about;
	next();
});
