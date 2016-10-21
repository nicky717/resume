

 (function () {
 var bio = {
 	name : "Sally Rowland",
 	role: "Web developer",
 	contacts : {mobile: "234-123-9876", email: "sally7676@gmail.com", github: "https://github.com/sally", location: "Fremont,CA"},
 	welcomeMessage: "Hello I am an aspiring web developer",
 	skills: "HTML, CSS, Javascript, jQuery, Ajax, Bootstrap",
 	biopic: "images/fry.jpg",
 	display : function (){
 			"use strict";
 			var HTMLheaderName = '<h1 id="name">' + this.name +  '</h1>',
 			HTMLheaderRole = '<span>' + this.role + '</span><hr>',
 			
 			HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">' + this.contacts.mobile + '</span></li>',
 			HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">' + this.contacts.email + '</span></li>',
 			HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">' + this.contacts.github + '</span></li>',
 			HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">' + this.contacts.location + '</span></li>',
 			HTMLbioPic = '<img src="' + this.biopic +  '" class="biopic">',
 			HTMLwelcomeMsg = '<span class="welcome-message">' + this.welcomeMessage + '</span>',
 			HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>',
 			HTMLskills = '<li class="flex-item"><span class="white-text">' + this.skills + '</span></li>';


 			$('#header').prepend(HTMLheaderRole).prepend(HTMLheaderName);
 			$('#topContacts').append(HTMLmobile).append(HTMLemail).append(HTMLgithub).append(HTMLlocation);
 			$('#header').append(HTMLbioPic).append(HTMLwelcomeMsg).append(HTMLskillsStart).append(HTMLskills);

 			$('#footerContacts').append(HTMLmobile).append(HTMLemail).append(HTMLgithub).append(HTMLlocation);
 			

 	}




 	}

bio.display();


})();


 (function(){

 var education = {
 		schools: [{name:"TSU"}, {location: "Arlington,TX"}, {degree:"Bachelor's of Science"}, {major:"Computer Science"},{dates: "08/04/2012-05/17/2016"}, {url: "www.tsu.com"}],
 		onlineCourses: [{title: "coursera"}, {school:"abc school"},{dates: "09/01/2014-12/12/2015"}, {url:"mycourseschool.com"}],
 		display: function () {
 			"use strict";
 			var HTMLschoolStart = '<div class="education-entry"></div>',
 				HTMLschoolName = '<a href="#">' + this.schools[0].name,
 				HTMLschoolDegree = ' -- ' + this.schools[2].degree + '</a>',
 				HTMLschoolDates = '<div class="date-text">' + this.schools[4].dates + '</div>',
 				HTMLschoolLocation = '<div class="location-text">' + this.schools[1].location + '</div>',
 				HTMLschoolMajor = '<em><br>Major: ' + this.schools[3].major + '</em>',

 				HTMLonlineClasses = '<h3>Online Classes</h3>',
 				HTMLonlineTitle = '<a href="#">' + this.onlineCourses[0].title,
 				HTMLonlineSchool = ' - ' + this.onlineCourses[1].school + '</a>',
 				HTMLonlineDates = '<div class="date-text">' + this.onlineCourses[2].dates + '</div>',
				HTMLonlineURL = '<br><a href="#">' + this.onlineCourses[3].url + '</a>';

				$('#education').append(HTMLschoolStart);
				$('#education').find('.education-entry').append(HTMLschoolName).find('a').append(HTMLschoolDegree);
				$('#education').find('.education-entry').append(HTMLschoolDates).append(HTMLschoolLocation).append(HTMLschoolMajor);

				/*
				$('#education').append(HTMLonlineClasses);
				$('#education').find('.education-entry').append(HTMLonlineTitle).find('a').append(HTMLonlineSchool);

				*/




 		}	




 }

 education.display();

})();

(function(){
var work = {

jobs: [{employer: "Tesla"}, {title: "Web Developer"}, {location: "Fremont,CA"}, {dates: "January 2016-Present"}, {description: "I work on building websites using HTML, CSS and Javascript, along with front-end UI framework AngularJS"}],

display : function (){
		"use strict";
var HTMLworkStart = '<div class="work-entry"></div>',
	HTMLworkEmployer = '<a href="#">' + this.jobs[0].employer,
 	HTMLworkTitle = ' - ' + this.jobs[1].title + '</a>',
 	HTMLworkDates = '<div class="date-text">' + this.jobs[3].dates + '</div>',
 	HTMLworkLocation = '<div class="location-text">' + this.jobs[2].location + '</div>',
	HTMLworkDescription = '<p><br>' + this.jobs[4].description + '</p>';

		$('#workExperience').append(HTMLworkStart);
		$('#workExperience').find('.work-entry').append(HTMLworkEmployer).find('a').append(HTMLworkTitle);
		$('.work-entry').append(HTMLworkDates).append(HTMLworkLocation).append(HTMLworkDescription);

		


}


};

work.display();

})();


(function() {

var projects = {

projects: [{title:"Restaurant Template"}, {dates: "04/04/2016-08/12/2016"}, {description: "This is a work in progress business website template"}, {images: ["images/confusion.png"]}],

display: function () {
	"use strict";
	var HTMLprojectStart = '<div class="project-entry"></div>',
		HTMLprojectTitle = '<a href="https://nicky717.github.io/conFusion/">' + this.projects[0].title + '</a>',
		HTMLprojectDates = '<div class="date-text">' + this.projects[1].dates + '</div>',
		HTMLprojectDescription = '<p><br>' + this.projects[2].description + '</p>',
		HTMLprojectImage = '<img src="' + this.projects[3].images + '">';

		$('#projects').append(HTMLprojectStart);
		$('#projects').find('.project-entry').append(HTMLprojectTitle).append(HTMLprojectDates).append(HTMLprojectDescription).append(HTMLprojectImage);




}


}


projects.display();




})();



var googleMap = '<div id="map"></div>';


$('#mapDiv').append(googleMap);


var locations = [
    ['Where I Live', 'Fremont, CA', 'https://www.placewhereilive.com'],
    ['Where I Studied', 'Arlington, TX', 'https://www.arlington.com'],
    ['Where I Work', 'Fremont, CA', 'https://www.tesla.com']
];

var geocoder;
var map;
var bounds = new google.maps.LatLngBounds();

function initialize() {
    map = new google.maps.Map(
    document.getElementById("map"), {
        center: new google.maps.LatLng(37.4419, -122.1419),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    geocoder = new google.maps.Geocoder();

    for (i = 0; i < locations.length; i++) {


        geocodeAddress(locations, i);
    }
}
google.maps.event.addDomListener(window, "load", initialize);

function geocodeAddress(locations, i) {
    var title = locations[i][0];
    var address = locations[i][1];
    var url = locations[i][2];
    geocoder.geocode({
        'address': locations[i][1]
    },

    function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
                map: map,
                position: results[0].geometry.location,
                title: title,
                animation: google.maps.Animation.DROP,
                address: address,
                url: url
            })
            infoWindow(marker, map, title, address, url);
            bounds.extend(marker.getPosition());
            map.fitBounds(bounds);
        } else {
            alert("geocode of " + address + " failed:" + status);
        }
    });
}

function infoWindow(marker, map, title, address, url) {
    google.maps.event.addListener(marker, 'click', function () {
        var html = "<div><h3>" + title + "</h3><p>" + address + "<br></div><a href='" + url + "'>View location</a></p></div>";
        iw = new google.maps.InfoWindow({
            content: html,
            maxWidth: 350
        });
        iw.open(map, marker);
    });
}

function createMarker(results) {
    var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
        map: map,
        position: results[0].geometry.location,
        title: title,
        animation: google.maps.Animation.DROP,
        address: address,
        url: url
    })
    bounds.extend(marker.getPosition());
    map.fitBounds(bounds);
    infoWindow(marker, map, title, address, url);
    return marker;
}
