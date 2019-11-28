



function descendingByDate (a, b) {
   return new Date(b) - new Date(a) 
}



$(".btn").click(function() {
   
  event.preventDefault();
  //variable declaration & alpha vantage API key

  var apiKey = "YGB86OOZOMRMBADG";
  //var search = $("#input").val().trim();
  var search = $("#input").val().trim();
  var queryURL =
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
    search +
    "&apikey=" +
    apiKey;

  console.log(search);
  
 

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
 const meta = response["Meta Data"];
 const timedata = response[ "Time Series (Daily)"];
 const fivedays = Object.keys(timedata).sort(descendingByDate).slice(0,5);

 const fivedaysdata = fivedays.map(function(d){
     return {
         date: d,
         ...timedata[d] 
        }
    
     
 })
 console.log(response);
 var array = [
    {
        Date: fivedaysdata[0].date,
        Open: fivedaysdata[0]["1. open"],
        High: fivedaysdata[0]["2. high"],
        Low: fivedaysdata[0]["3. low"],
        Close: fivedaysdata[0]["4. close"],
    },
    {
        Date: fivedaysdata[1].date,
        Open: fivedaysdata[1]["1. open"],
        High: fivedaysdata[1]["2. high"],
        Low: fivedaysdata[1]["3. low"],
        Close: fivedaysdata[1]["4. close"],
    },
    {
        Date: fivedaysdata[2].date,
        Open: fivedaysdata[2]["1. open"],
        High: fivedaysdata[2]["2. high"],
        Low: fivedaysdata[2]["3. low"],
        Close: fivedaysdata[2]["4. close"],
    },
    {
        Date: fivedaysdata[3].date,
        Open: fivedaysdata[3]["1. open"],
        High: fivedaysdata[3]["2. high"],
        Low: fivedaysdata[3]["3. low"],
        Close: fivedaysdata[3]["4. close"],
    },
    {
        Date: fivedaysdata[4].date,
        Open: fivedaysdata[4]["1. open"],
        High: fivedaysdata[4]["2. high"],
        Low: fivedaysdata[4]["3. low"],
        Close: fivedaysdata[4]["4. close"],
    },
]
var num = 1;
var number = "#";

for (var i = 0; i < fivedaysdata.length; i ++) {
    
  
    console.log(array[i].Date);
   
    number = "#" + num; 
$(number).append(array[i].Date);

num ++
console.log(number);
console.log(num);
}

for (var p = 0; p < fivedaysdata.length; p ++) {

    number = "#" + num;
$(number).append(array[p].Open);

num ++
console.log(number);
console.log(num);
}

for (var q = 0; q < fivedaysdata.length; q ++) {

    number = "#" + num;
$(number).append(array[q].High);

num ++
console.log(number);
console.log(num);
}

for (var r = 0; r < fivedaysdata.length; r ++) {

    number = "#" + num;
$(number).append(array[r].Low);

num ++
console.log(number);
console.log(num);
}

for (var n = 0; n < fivedaysdata.length; n ++) {

    number = "#" + num;
$(number).append(array[n].Close);

num ++
console.log(number);
console.log(num);
}
  });

  var nytAPIKEY = "iGbme2pZ2eaACzYTpAiX9BGXySUEUB3H"
  var NYTUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=" + nytAPIKEY
  var search = $("#input").val().trim();


$.ajax({
        url: NYTUrl,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        console.log(response.response.docs);
        
        var articles = response.response.docs;

        for (var i = 0; i < articles.length; i ++) {

        console.log(articles[1].headline.main);
        var newsTable = $("<td>").text(articles[i].headline.main); 
            
        $("#newsBody").append(newsTable);
      };


    });

});

