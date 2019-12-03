



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
    
  
    // console.log(array[i].Date);
   
    number = "#" + num; 
$(number).append(array[i].Date);

num ++
// console.log(number);
// console.log(num);
}

for (var p = 0; p < fivedaysdata.length; p ++) {

    number = "#" + num;
$(number).append(array[p].Open);

num ++
// console.log(number);
// console.log(num);
}

for (var q = 0; q < fivedaysdata.length; q ++) {

    number = "#" + num;
$(number).append(array[q].High);

num ++
// console.log(number);
// console.log(num);
}

for (var r = 0; r < fivedaysdata.length; r ++) {

    number = "#" + num;
$(number).append(array[r].Low);

num ++
// console.log(number);
// console.log(num);
}

for (var n = 0; n < fivedaysdata.length; n ++) {

    number = "#" + num;
$(number).append(array[n].Close);

num ++
// console.log(number);
// console.log(num);
}

var chart =  document.getElementById("stockchart").getContext('2d');
var fiveDayStockChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels:[fivedaysdata[0].date, fivedaysdata[1].date, fivedaysdata[2].date, fivedaysdata[3].date, fivedaysdata[4].date],
        datasets: [
            {
                label: 'Daily High',
                data: [
                    fivedaysdata[0]["2. high"],
                    fivedaysdata[1]["2. high"],
                    fivedaysdata[2]["2. high"],
                    fivedaysdata[3]["2. high"],
                    fivedaysdata[4]["2. high"],
                ],
                backgroundColor: "rgb(43, 160, 43)"
            }
        ]
    },
    options: {}
})




  var nytAPIKEY = "90f7ef30539848a78d424e69b49f2ea9"
  var NYTUrl = "https://newsapi.org/v2/everything?q=" + search + " &from=" + fivedaysdata[0].date + "&to=" + fivedaysdata[4].date + "&sortBy=popularity&apiKey=" + nytAPIKEY
//   var search = $("#input").val().trim();


$.ajax({
        url: NYTUrl,
        method: "GET"
      }).then(function(response) {
        // console.log(response);
        console.log(response);
        
        var articles = response.articles;
        console.log(articles);

        for (var i = articles.length - 10; i >= 0; i --) {

        // console.log(articles[1].headline.main);
        // console.log(articles[1].web_url);
        var newsTable = $("<a>").text(articles[i].title);
        var linkUrl = articles[i].url;

        newsTable.addClass("links");
        newsTable.attr("href", linkUrl); 
        var newsInfo = $("<td>").append(newsTable);
        $("#newsBody").append(newsInfo);
        
       


      };

     
    });

});  

});

