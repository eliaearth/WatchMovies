(function(){
    var mainApp = angular.module('mainApp');
    mainApp.service('searchModel', [function(){
        return model= {
            textTofind:null,
            moviesFound:[
   {
      "showId":27518,
      "showname":"Suits",
      "showlink":"http://www.tvrage.com/Suits",
      "seasons":5,
      "image":"http://images.tvrage.com/shows/28/27518.jpg",
      "startdate":"Jun/23/2011",
      "originCountry":"US",
      "status":"Scripted",
      "classification":null,
      "summary":"In Suits, one of Manhattan's top corporate lawyers (Gabriel Macht) sets out to recruit a new hotshot associate and hires the only guy that impresses him--a brilliant but unmotivated college dropout (Patrick J. Adams). Though he isn't actually a lawyer, this legal prodigy has the book smarts of a Harvard law grad and the street smarts of a hustler. However, in order to serve justice and save their jobs, both these unconventional thinkers must continue the charade.",
      "genres":null,
      "runtime":"60",
      "network":"USA Network",
      "airtime":"22:00",
      "airday":"Wednesday",
      "timezone":"GMT-5 +DST",
      "latestEpName":"04x16 Not Just a Pretty Face",
      "latestEpDate":"Mar/04/2015",
      "nextEpName":null,
      "nextEpDate":null
   },
   {
      "showId":36490,
      "showname":"The Trivial Pursuits of Arthur Banks",
      "showlink":"http://www.tvrage.com/the-trivial-pursuits-of-arthur-banks",
      "seasons":1,
      "image":"http://images.tvrage.com/shows/37/36490.jpg",
      "startdate":"Aug/22/2011",
      "originCountry":"US",
      "status":"Mini-Series",
      "classification":null,
      "summary":"The Trivial Pursuits of Arthur Banks follows successful playwright-director Arthur Banks (Adam Goldberg), as he stages the latest play based on his dysfunctional life. While searching for love and success throughout the rehearsal process, Arthur turns to his therapist (Jeffrey Tambor) and his best friend Chandler (Peter Chekvala) for advice. Most of that advice has to do with the problems that occur every time he falls for a woman -- be it his live-in girlfriend Annette (Wendy Glenn), his over-the-top leading lady Cornelia (Laura Clery), or the lovelorn teenager Chloe (Fabianne Gstottenmayr).",
      "genres":null,
      "runtime":"15",
      "network":"amc",
      "airtime":"12:00",
      "airday":null,
      "timezone":"GMT-5 +DST",
      "latestEpName":"01x03 The Latent Existentialist",
      "latestEpDate":"Sep/05/2011",
      "nextEpName":null,
      "nextEpDate":null
   }
]	

        };
    }]);
}())