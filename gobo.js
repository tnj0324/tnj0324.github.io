$(function(){
  var array = [];
  var stock = {};

$('#kara').on('click',function(){
    array = []
   for(var i = 0; i < Object.keys(stock).length; i++ ){;
    $('#' + Object.keys(stock)[i]).html('<img id="img-chara" src="' + stock[Object.keys(stock)[i]] +'">')
  }
    stock = {};
  });

$('#kuuhaku').on('click',function(){
   if (array[0] == ' ' && array[1] == ' '){
   alert('最初から選びなおしてください');
   array = []
 }else {
   array.push(' ');
 }
   if (array.length === 3){
       for(var i = 0; i < Object.keys(stock).length; i++ ){
$('#' + Object.keys(stock)[i]).html('<img id="img-chara" src="' + stock[Object.keys(stock)[i]] +'">')
      }
   stock = {};
  $('.card-group').empty()
   $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      dataType: 'json',
      data:{ part:'snippet',
             key:'AIzaSyDhYlnBpHK2VrlScts1F_8xY8avoFLJoes',
             q:"DBFZ" + " " + array[0] + "/" + array[1] + "/" + array[2],
             maxResults:30,}

      // フォーム要素の内容をハッシュ形式に変換

    })

    .done(function(data) {
        console.log('dekimasita');
      console.log(data);

      for(var t = 0; t < data.items.length; t++ ){
      var link = '<a class="card-body text-center" target="_blank" href="https://www.youtube.com/watch?v=' + data.items[t].id.videoId + '">'
      var title = '<p class="card-title">"' + data.items[t].snippet.title + '"</p>'　　
       var samune = '<img class="card-img-top" src="' + data.items[t].snippet.thumbnails.medium.url +'">'
       var setsumei = '<p class="card-text">"' + data.items[t].snippet.description + '"</p></a>'
      $('.card-group').append('<div class="col-4"><div class="card"> "' + link + title + samune + setsumei + '"</div></div>')
    }
   })
    .fail(function() {
        console.log('damepo');
    })
    .always(function(){
      array =[]
    });
          }else{
          }

 });

 $('[id^=chara]').on('click',function(){
   var huga = $(this).children('img').attr('src');
    stock[$(this).attr('id')] = huga;
   $(this).html('<img id="img-chara" src="gobogazou/makkuro.jpg">')
 });

$('[id^=chara]').on('click',function(){
       var charaid = $(this).attr('chara-id')
       if (array.indexOf(charaid) >= 0){
       }else{
       array.push(charaid);
     };

     if (array.length === 3){
         for(var i = 0; i < Object.keys(stock).length; i++ ){;
  $('#' + Object.keys(stock)[i]).html('<img id="img-chara" src="' + stock[Object.keys(stock)[i]] +'">')
        }
   stock = {};
    $('.card-group').empty()
$.ajax({
   url: 'https://www.googleapis.com/youtube/v3/search',
   type: 'GET',
   dataType: 'json',
   data:{ part:'snippet',
          key:'AIzaSyDhYlnBpHK2VrlScts1F_8xY8avoFLJoes',
          q:"DBFZ" + " " + array[0] + "/" + array[1] + "/" + array[2],
          maxResults:30,}

   // フォーム要素の内容をハッシュ形式に変換

 })

 .done(function(data) {
     console.log('dekimasita');
   console.log(data);
   for(var t = 0; t < data.items.length; t++ ){
   var link = '<a class="card-body text-center" target="_blank" href="https://www.youtube.com/watch?v=' + data.items[t].id.videoId + '">'
   var title = '<p class="card-title">"' + data.items[t].snippet.title + '"</p>'　　
    var samune = '<img class="card-img-top" src="' + data.items[t].snippet.thumbnails.medium.url +'">'
    var setsumei = '<p class="card-text">"' + data.items[t].snippet.description + '"</p></a>'
   $('.card-group').append('<div class="col-4"><div class="card"> "' + link + title + samune + setsumei + '"</div></div>')
 }
})
 .fail(function() {
     console.log('damepo');
 })
 .always(function(){
   array = []
 });
       }else{
       }
 });
});
