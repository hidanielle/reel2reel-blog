SC.initialize({
  client_id: 'ac104a4395c15b03639ab3118afe7b7f'
});

var roseEp = [];

SC.get('/users/reel2reelpodcast/tracks').then(function(tracks){
  // // console.log(tracks[0].title+' '+tracks[0].permalink_url+''+tracks[0].description);
  // document.getElementById('epTitle').innerHtml = tracks[0].title;

  var firstTitle = tracks[0].title;
  var firstDesc = tracks[0].description;
  var firstUrl = tracks[0].permalink_url;


  for (var i = 0; i < tracks.length; i++) {
    if(tracks[i].title.indexOf('Rose 2 Rose') !== -1) {
      roseEp.push(tracks[i]);
    } 
  }

  $('.ep-title').html(tracks[0].title);
  $('.ep-url').attr('href', tracks[0].permalink_url);
  $('.ep-description').html(tracks[0].description);  

  $('.rose .ep-title').html(roseEp[0].title);
  $('.rose .ep-url').attr('href', roseEp[0].permalink_url);
  $('.rose .ep-description').html(roseEp[0].description);  


  $.each(roseEp, function(i) {
    var epList = $('.rose-ep-list');

    var li = $('<li/>').appendTo(epList);
    var aaa = $('<a/>').attr('href', roseEp[i].permalink_url).attr('target', '_blank').attr('class','link--external link--text').text(roseEp[i].title).appendTo(li);

    return i<5;

  });

  $.each(tracks, function(i) {
    var epList = $('.reel-ep-list');

    var li = $('<li/>').appendTo(epList);
    var aaa = $('<a/>').attr('href', tracks[i].permalink_url).attr('target', '_blank').attr('class','link--external link--text').text(tracks[i].title).appendTo(li);

    return i<5;

  });
});

window.sr = ScrollReveal();
sr.reveal('[data-scroll]');