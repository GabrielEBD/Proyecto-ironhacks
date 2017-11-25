 
 function apiZillow(c1,c2,callback)
    {
      arr2 = {x:"",y:"",z:""};
      var xmlhttp7 = new XMLHttpRequest();
      //var url = "https://cors-anywhere.herokuapp.com/"+ "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz18wn3afy1vv_6o78e&address="+c2+"&citystatezip=New+York%2C+NY&rentzestimate=true";
      
      var url = "https://cors-anywhere.herokuapp.com/"+ "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz18wn3afy1vv_6o78e&address=2114+Bigelow+Ave&citystatezip=New+York%2C+NY&rentzestimate=true";
      xmlhttp7.open("GET", url, true);
      xmlhttp7.send();
      xmlhttp7.onreadystatechange = function() 
      {
        if (xmlhttp7.readyState == 4 && xmlhttp7.status == 200) 
        {
            myHousesRent=xmlhttp7.responseXML;

            if(parseInt(myHousesRent.childNodes[0].childNodes[1].childNodes[1].innerHTML) == 0)
            {    
                  arr2.x = myHousesRent;
                  console.log(myHousesRent);
                  arr2.y = c1;
                  arr2.z = c2;
                  callback(arr2);
                  
              
              
            }
            
        }
        
      };
    }