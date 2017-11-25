
var map;

function onGoogleMapResponse(){

	map = new google.maps.Map(document.getElementById('googleMapContainer'),{
		zoom: 11
	});
    //https://developers.google.com/maps/documentation/javascript/styling
	var city = "New York";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({'address' : city}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
		};
	});
	
}


var direcones = new Array(0);

direcones.push('13734+70th+Ave+Flushing+NY+11367');
direcones.push('16020+107th+Ave+Jamaica+NY+11433');
direcones.push('69th+Pl+Glendale+NY+11385');
//-----direcones.push('5903+55th+St+#+2+Maspeth+NY+11378');
//-----direcones.push('63152+Alderton+St+#+1A+Rego+Park+NY+11374');

direcones.push('15011+60th+Ave+Flushing+NY+11355');
//direcones.push('3219+100th+St+Flushing+NY+11369');
//direcones.push('3817+48th+Ave+#+2FL+Long+Island+City+NY+11101');
//direcones.push('6188+169th+St+#+3+Fresh+Meadows+NY+11365');

direcones.push('2528+83rd+St+#+2NDFLOOR+East+Elmhurst+NY+11370');

//direcones.push('2314+Broadway+#+7+Astoria+NY+11106');
//direcones.push('36+Marginal+St+W+#+1FL+Brooklyn+NY+11207');
direcones.push('9020+Spritz+Rd+Jamaica+NY+11417');
direcones.push('13524+124th+St+South+Ozone+Park+NY+11420');
direcones.push('76+Stanhope+St+Brooklyn+NY+11221');
direcones.push('558+E+96th+St+#+3+Brooklyn+NY+11212');
direcones.push('1554+Union+St+#+2B+Brooklyn+NY+11213');
direcones.push('152+Martense+St+APT+2+Brooklyn+NY+11226');
//direcones.push('6413+65th+Ln+Flushing+NY+11379');
//direcones.push('559+Lafayette+Ave+#+2+Brooklyn+NY+11205');
direcones.push('337+E+82nd+St+New+York+NY+10028');
direcones.push('6211+20th+Ave+Brooklyn+NY+11204+77th+St+Brooklyn+NY+11228');
direcones.push('6640+Bergen+Pl+Brooklyn+NY+11220');
direcones.push('2805+Cropsey+Ave+Brooklyn+NY+11214');
direcones.push('E+13th+St+Brooklyn+NY+11229');
direcones.push('40+Montgomery+Pl+APT+3L+1066+52nd+St+#+1+Brooklyn+NY+11219');
direcones.push('7013+Catamaran+Way+Far+Rockaway+NY+11692');
direcones.push('312+Beach+42+St+Far+Rockaway+NY+11691');
direcones.push('316+Beach+30th+St+Far+Rockaway+NY+11691');

direcones.push('1479+Beach+Channel+Dr+Far+Rockaway+NY+11691');
direcones.push('1297+Saint+Marks+Ave+APT+2R+Brooklyn+NY+11213');
direcones.push('15516+134th+Ave+Jamaica+NY+11434');
direcones.push('9020+Spritz+Rd+Jamaica+NY+11417');
direcones.push('14741+84th+Ave+Jamaica+NY+11435');
direcones.push('6753+170th+St+Flushing+NY+11365');
direcones.push('8535+Edgerton+Blvd+Jamaica+NY+11432');
direcones.push('16437+109th+Ave,+Jamaica,+NY+11433');
direcones.push('11627+Newburgh+St,+Jamaica,+NY+11412');
direcones.push('12524+227th+St,+Cambria+Heights,+NY+11411');
direcones.push('10720+Springfield+Blvd,+Jamaica,+NY+11429');
direcones.push('23724+Fairbury+Ave,+Bellerose,+NY+11426');
direcones.push('14468+177th+St,+Jamaica,+NY+11434');
direcones.push('7376+197th+St,+Flushing,+NY+11366');
direcones.push('6822+Kessel+St,+Flushing,+NY+11375');
direcones.push('29+Skillman+Ave+APT+1L,+Brooklyn,+NY+11211');
direcones.push('35+Spring+St+#+TWNH,+New+York,+NY+10012');
direcones.push('991+Bergen+St+#+THOUSE,+Brooklyn,+NY+11216');
direcones.push('178+Adelphi+St+#+GARDEN,+Brooklyn,+NY+11205');
direcones.push('135+Reade+St,+New+York,+NY+10013');
direcones.push('3815+Crescent+St,+Long+Island+City,+NY+11101');
direcones.push('359+W+20th+St+APT+5,+New+York,+NY+10011');
direcones.push('406+E+64th+St+#+9AA,+New+York,+NY+10065');
direcones.push('160+E+95th+St+#+3B,+New+York,+NY+10128');
direcones.push('410+E+50th+St+APT+2,+New+York,+NY+10022');
direcones.push('2401+19th+St+#+3,+Astoria,+NY+11102');
direcones.push('470+Crescent+St+#+2,+Brooklyn,+NY+11208');
direcones.push('9718+125th+St,+Jamaica,+NY+11419');
direcones.push('349+E+104th+St+#+2F,+New+York,+NY+10029');
direcones.push('223+W+105th+St+APT+2FE,+New+York,+NY+10025');
direcones.push('426+E+141st+St+#+3,+Bronx,+NY+10454');
direcones.push('3383+12th+Ave+APT+1R,+Brooklyn,+NY');
direcones.push('4360+169th+St,+Flushing,+NY+11358');
direcones.push('15028+Booth+Memorial+Ave+#+FIRST,+Flushing,+NY+11355');
direcones.push('20120+36th+Ave,+Flushing,+NY+11361');
direcones.push('8823+241st+St,+Bellerose,+NY+11426');
direcones.push('21540+27th+Ave,+Bayside,+NY+11360');
direcones.push('10516+34th+Ave,+Flushing,+NY+11368');
direcones.push('2403+92nd+St,+Flushing,+NY+11369');
direcones.push('2130+42nd+St+#+1,+Astoria,+NY+11105');
direcones.push('1314+Franklin+Ave,+Bronx,+NY+10456');
direcones.push('12132+8th+Ave+#+1ST,+Flushing,+NY+11356');
direcones.push('1254+150th+St,+Whitestone,+NY+11357');
direcones.push('14334+Ash+Ave,+Flushing,+NY+11355');
direcones.push('3326+201st+St,+Flushing,+NY+11361');
direcones.push('24014+69th+Ave,+Douglaston,+NY+11362');
direcones.push('10516+34th+Ave,+Flushing,+NY+11368');
direcones.push('1743+Gleason+Ave+FL+1,+Bronx,+NY+10472');
direcones.push('655+Rosedale+Ave,+Bronx,+NY+10473');
direcones.push('1349+Sheridan+Ave,+Bronx,+NY+10456');
direcones.push('4316+223rd+St,+Bayside,+NY+11361');
direcones.push('1372+Zerega+Ave,+Bronx,+NY+10462');
direcones.push('1961+Wallace+Ave,+Bronx,+NY+10462');
direcones.push('2605+Decatur+Ave,+Bronx,+NY+10458');
direcones.push('121+Hendricks+Ave,+Staten+Island,+NY+10301');
direcones.push('655+Van+Duzer+St,+Staten+Island,+NY+10304');

direcones.push('486+Buel+Ave,+Staten+Island,+NY+10305');
//direcones.push('139+Oceanview+Pl,+Staten+Island,+NY+10308');
direcones.push('115+Twombly+Ave,+Staten+Island,+NY+10306');
direcones.push('628+Annadale+Rd,+Staten+Island,+NY+10312');
//direcones.push('167+Dover+Grn,+Staten+Island,+NY+10312');


var casas = new Map();

var manhca = [];

var dirAux = [];
var urlAux = [];
 
function getDataFromURL(url,dir){
    var xml = new XMLHttpRequest();
    var valor;
    var completo = "https://cors-anywhere.herokuapp.com/"+ url;                                                                             
    xml.open("GET", completo, true);
    xml.send();
    xml.onreadystatechange = function(){
        var aux = xml.responseXML;
        if (xml.readyState == 4 && xml.status == 200){
            casa = xml.responseXML;
            if(parseInt(casa.childNodes[0].childNodes[1].childNodes[1].innerHTML) == 0){    
                valor = casa.getElementsByTagName("rentzestimate")[0].firstChild.innerHTML;
                var latt = casa.getElementsByTagName("latitude")[0].innerHTML;
                var long = casa.getElementsByTagName("longitude")[0].innerHTML;
                casas.set(dir,valor);
                var marker = new google.maps.Marker({
                    position:  new google.maps.LatLng(parseFloat(latt), parseFloat(long)),
                    map: null,

                });
                manhca.push(marker);
                dirAux.push(dir);
                urlAux.push(url);    
                //console.log(valor);
                //console.log(casas.get(dir));
                //console.log(casa.getElementsByTagName("rentzestimate")[0].firstChild.innerHTML);
            }
        }
    };
}

function updateData(){
    var url;
    //console.log(direcones.length);
    for (var i = 0; i < direcones.length; i++) {
        url = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz18wn3afy1vv_6o78e&address="+direcones[i]+"&citystatezip=New+York%2C+NY&rentzestimate=true";
        getDataFromURL(url, direcones[i]);
        //console.log(costo);
        //casas.set(direcones[i], costo);
    }
}   
updateData();


function pintarC(){
    //console.log(manhca.length);
    //console.log(dirAux.length);
    if(manhca[1].map !== map){
        for(var i = 0; i < manhca.length;i++){
            //console.log(manchas.get(direcones[i]));
            manhca[i].setMap(map);

        }
    }else{
        for(var i = 0; i < manhca.length;i++){
            //console.log(manchas.get(direcones[i]));
            manhca[i].setMap(null);

        }
    }
}

function pintarM(){
    //console.log(museos.length)
    if(museos[1].map !== map){ 
        for(var i =0; i < museos.length; i++){
            museos[i].setMap(map);
        }
    }else{
        for(var i =0; i < museos.length; i++){
            museos[i].setMap(null);
        }
    }
}
function pintarG(){
    //console.log(galerias.length)
    if(galerias[1].map !== map){
        for(var i =0; i < galerias.length; i++){
            galerias[i].setMap(map);
        }
    }else{
        for(var i =0; i < galerias.length; i++){
            galerias[i].setMap(null);
        }
    }
}



$(document).ready(function(){
    $("#updateButton").on("click",llenarTabla);
})

$(document).ready(function(){
    $("#pintarCasa").on("click",pintarC);
    
})


$(document).ready(function(){
    $("#pintarMuseo").on("click",pintarM);
    
})

$(document).ready(function(){
    $("#pintarGaleria").on("click",pintarG);
    
})

var museos = []
var galerias = []


function Museoos(){
    var cont = 0;
    $.getJSON("https://data.cityofnewyork.us/api/views/fn6f-htvy/rows.json", function(data, tStatus){
        for(var i = 0; i < data.data.length; i++){
            var arr = data.data[i][8].split(" "); "POINT ( LAT ,LOG)"
            var la = arr[1].split('(');
            var loa = arr[2].split(')');
            var l = parseFloat(la[1]);
            var lo = parseFloat(loa[0]);
            //console.log(l)
            //console.log(lo)
            var marker = new google.maps.Marker({
                    position:  new google.maps.LatLng(lo, l),
                    map: null,
                    icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/museum-historical.png'
                });
            museos.push(marker);
        }
    });
};

function Arte(){
    var cont = 0;
    $.getJSON("https://data.cityofnewyork.us/api/views/43hw-uvdj/rows.json", function(data, tStatus){
        for(var i = 0; i < data.data.length; i++){
            var arr = data.data[i][9].split(" ");
            var la = arr[1].split('('); 
            var loa = arr[2].split(')');
            var l = parseFloat(la[1]);
            var lo = parseFloat(loa[0]);
            //console.log(l)
            //console.log(lo)
            var marker = new google.maps.Marker({
                    position:  new google.maps.LatLng(lo, l),
                    map: null,
                    icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/museum.png'
                });
            galerias.push(marker);
        }
    });
};

Arte();
Museoos();

function llenarTabla(){
    referencia = $("Table")[0];
    var newRow, casa, precio;
    
    for(var i = 0; i < dirAux.length; i++){
        newRow = referencia.insertRow(referencia.rows.length);
        casa = newRow.insertCell(0);
        precio = newRow.insertCell(1);
        //direccion
        var f = dirAux[i].split("+");
        var c = "";
        for(var j = 0; j < f.length;j++){
            c += f[j]+" ";
        }
        // link
        var g = "";
        for(var j = 0; j < f.length;j++){
            g +=f[j]+"-"
        }
        var oi = "https://www.zillow.com/homes/for_rent/"+g+"_rb/?fromHomePage=true&shouldFireSellPageImplicitClaimGA=false&fromHomePageTab=rent"
        //console.log(oi);
        casa.innerHTML = "<a href="+oi+">"+c+"</a>";
        precio.innerHTML = "$ "+casas.get(dirAux[i]);
    }
    nums();
}

function nums(){
    referencia = $("num");
    referencia.innerHTML = "casa totales "+dirAux.length;
}

