function kk(){
        var hand=handle.value;
        var rate=[];
        var tm=[];
        var url="http://codeforces.com/api/user.rating?handle="+hand;
        $.getJSON(url,function(data){
                for(var i=0;i<data.result.length;i++){
                  rate.push(data.result[i].newRating);
                }
                for(var i=0;i<data.result.length;i++){
                  var ml=data.result[i].ratingUpdateTimeSeconds*1000;
                  var date=new Date(ml).getDate();
                  var month=new Date(ml).getMonth()+1;
                  var year=new Date(ml).getYear();
                  //var year=yr.substring(1,yr.length);
                  var hh=new Date(ml).getHours();
                  var mm=new Date(ml).getMinutes();
                  var ss=new Date(ml).getSeconds();
                  var final=date+"-"+month+"-"+year;
                  tm.push(final);
                }
                var maxx=Math.max.apply(null, rate)
                console.log(maxx);
                (function() {
                  Plotly.newPlot(myDiv, [{
                      type: 'scatter',
                      x: tm,
                      y: rate,
                      marker: {
                          color: '#C8A2C8',
                          line: {
                              width: 2.5
                          }
                      }
                  }], {
                      title: 'Max Rating: '+maxx,
                      font: {
                          size: 16
                      }
                  });
            })();
                                  //$(".mypanel").html();
        });
    }
