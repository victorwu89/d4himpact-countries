var arr = [];
google.charts.load('current', {
		'packages':['geochart'],
		// Note: you will need to get a mapsApiKey for your project.
		// See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
		'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
	});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
 var data = new google.visualization.DataTable();
 data.addColumn('string', 'Country');
 data.addColumn('number', 'Value');
 data.addColumn({type:'string', role:'tooltip', p:{html:true} });var ivalue = new Array();
 data.addRows([[{v:'China',f:'Shanghai, Shandong, and Anhui, China'},0,'Analytics for Public Health Practice<br>CRVS Data Use<br/>Data-driven Leadership Development<br />Data Reports<br />Data to Policy<br />Digital Data Solutions<br>Institutional Data Use Policy']]);
 ivalue['China'] = '';

 data.addRows([[{v:'Bangladesh',f:'Bangladesh'},1,'Analytics for Public Health Practice <br />Data for Decision Makers<br />Data-driven Leadership Development<br />Data Reports<br />Data to Policy<br />Digital Data Solutions<br />Journalist/Communication Staff Training<br />Organizational Design<br />Public Health Bulletin<br /> Scientific Communication']]);
 ivalue['Bangladesh'] = '';

 data.addRows([[{v:'Brazil',f:'Brazil'},2,'Analytics for Public Health Practice<br>Data for Decision-Makers<br>Data Reports<br>Digital Data Solutions<br>Journalist/Communication Staff Training<br> Scientific Communications']]);
 ivalue['Brazil'] = '';

 data.addRows([[{v:'Colombia',f:'Colombia'},3,'Analytics for Public Health Practice<br />Data Reports<br />Data to Policy<br />Digital Data Solutions<br />Institutional Data Use Policy<br />Organizational Design<br />Journalist/Communication Staff Training<br />Public Health Bulletin<br />Scientific Communication']]);
 ivalue['Colombia'] = '';

 data.addRows([[{v:'Ecuador',f:'Ecuador'},4,'Analytics for Public Health Practice<br>Organizational Design']]);
 ivalue['Ecuador'] = '';

 data.addRows([[{v:'Ghana',f:'Ghana'},5,'Analytics for Public Health Practice<br>CRVS Data Use<br>Data for Decision-Makers<br>Data to Policy<br>Institutional Data Use Policy<br>Journalist/ Communication Staff Training']]);
 ivalue['Ghana'] = '';

 data.addRows([[{v:'Malawi',f:'Malawi'},6,'Analytics for Public Health Practice<br>Data for Decision-Makers<br>Institutional Data Use Policy<br>Journalist/Communication Staff Training']]);
 ivalue['Malawi'] = '';

 data.addRows([[{v:'Morocco',f:'Morocco'},7,'Analytics for Public Health Practice<br />Data for Decision-Makers<br>Data Reports<br>Digital Data Solutions<br /> Organizational Design']]);
 ivalue['Morocco'] = '';

 data.addRows([[{v:'India',f:'Mumbai and Maharashtra, India'},8,'Analytics for Public Health Practice<br />Data for Decision-Makers<br/>Data Reports<br />Data to Policy<br>Digital Data Solutions<br /> Journalist/Communication Staff Training<br>Organizational Design<br />Public Health Bulletin']]);
 ivalue['Mumbai'] = '';

 data.addRows([[{v:'Myanmar',f:'Myanmar'},9,'Analytics for Public Health Practice<br />Data-driven Leadership Development<br />Data for Decision-Makers<br />Data Reports<br />Data to Policy<br />Digital Data Solutions']]);
 ivalue['Myanmar'] = '';

 data.addRows([[{v:'Peru',f:'Peru'},10,'CRVS Data Use<br>Data for Decision-Makers<br>Data Reports<br>Digital Data Solutions<br>Data to Policy<br>Journalist/Communication Staff Training<br>Organizational Design']]);
 ivalue['Peru'] = '';

 data.addRows([[{v:'Philippines',f:'Philippines'},11,'Analytics for Public Health Practice<br />CRVS Data Use<br />Data Reports<br />Data to Policy<br />Digital Data Solutions<br />Institutional Data Use Policy<br />Journalist/Communication Staff Training<br />Organizational Design']]);
 ivalue['Philippines'] = '';

 data.addRows([[{v:'Rwanda',f:'Rwanda'},12,'Analytics for Public Health Practice<br>Data-driven Leadership Development<br />Data to Policy<br>Public Health Bulletin Development']]);
 ivalue['Rawanda'] = '';

 data.addRows([[{v:'SB',f:'Solomon Islands'},13,'Analytics for Public Health Practice<br />Data Reports<br>Data to Policy']]);
 ivalue['Solomons'] = '';

 data.addRows([[{v:'Sri Lanka',f:'Sri Lanka'},14,'Analytics for Public Health Practice<br>Data-driven Leadership Development<br>Data Reports<br>Data to Policy<br>Digital Data Solutions<br/>Institutional Data Use Policy<br />Journalist/Communication Staff Training']]);
 ivalue['Sri Lanka'] = '';

 data.addRows([[{v:'Tanzania',f:'Tanzania'},15,'CRVS Data Use<br />Data to Policy<br>Journalist/Communication Staff Training<br>Public Health Bulletins<br />Scientific Communication']]);
 ivalue['Tanzania'] = '';

 data.addRows([[{v:'Papua New Guinea',f:'Papua New Guinea'},16,'Analytics for Public Health Practice<br>Data Reports<br>Organizational Design']]);
 ivalue['papua new guinea'] = '';

 data.addRows([[{v:'Zambia',f:'Zambia'},17,'Data to Policy<br>Public Health Bulletin<br />Scientific Communication']]);
 ivalue['Zambia'] = '';

 data.addRows([[{v:'Cambodia',f:'Cambodia'},18,'Analytics for Public Health Practice<br />CRVS Data Use<br />Data Reports<br />Digital Data Solutions<br />Organizational Design']]);
 ivalue['Cambodia'] = '';

 data.addRows([[{v:'Cameroon',f:'Cameroon'},19,'Data Reports<br />Digital Data Solutions<br />Organizational Design']]);
 ivalue['Cameroon'] = '';

 data.addRows([[{v:'Ethiopia',f:'Ethiopia'},20,'CRVS Data Use <br />Data Reports<br />Organizational Design']]);
 ivalue['Ethiopia'] = '';

 data.addRows([[{v:'Mozambique',f:'Mozambique'},21,'CRVS Data Use<br />Data Reports<br />Digital Data Solutions<br />Organizational Design']]);
 ivalue['Mozambique'] = '';

 data.addRows([[{v:'Senegal',f:'Senegal'},22,'CRVS Data Use<br />Data for Decision-Makers<br />Data Reports<br />Digital Data Solutions<br />Organizational Design']]);
 ivalue['Senegal'] = '';

 data.addRows([[{v:'Thailand',f:'Thailand'},23,'Data to Policy<br />Public Health Bulletin<br />Scientific Communication']]);
 ivalue['Thailand'] = '';

 data.addRows([[{v:'Uganda',f:'Uganda'},24,'Data to Policy<br>Public Health Bulletin<br />Scientific Communication']]);
 ivalue['Uganda'] = '';

 data.addRows([[{v:'Vietnam',f:'Vietnam'},25,'Organizational Design']]);
 ivalue['Vietnam'] = '';

 data.addRows([[{v:'Bolivia',f:'Bolivia'},26,'Analytics for Public Health Practice<br />CRVS Data Use']]);
 ivalue['Bolivia'] = '';

 data.addRows([[{v:'Indonesia',f:'Indonesia'},27,'CRVS Data Use']]);
 ivalue['Indonesia'] = '';

 data.addRows([[{v:'Kenya',f:'Kenya'},28,'Analytics for Public Health Practice<br />Data Reports<br />Data to Policy<br />Journalist/Communication Staff Training<br />Organizational Design']]);
 ivalue['Kenya'] = '';

 data.addRows([[{v:'South Africa',f:'South Africa'},29,'Data to Policy<br />Public Health Bulletin<br />Scientific Communication']]);
 ivalue['Indonesia'] = '';

 data.addRows([[{v:'Zimbabwe',f:'Zimbabwe'},30,'CRVS Data Use<br />Data Reports']]);
 ivalue['Zimbabwe'] = '';

 var options = {
	 'backgroundColor': {fill:'#f5f5f5',stroke:'#FFFFFF' ,strokeWidth:0 },
	 'colorAxis':  {minValue: 0 , maxValue: 30,
		 colors: ['#0094cc','#0094cc','#5e5d5d','#0094cc','#5e5d5d','#5e5d5d','#5e5d5d','#0094cc','#0094cc','#5e5d5d','#5e5d5d','#0094cb','#0094cc','#0094cb','#0094cc',
		 '#0094cc','#0094cc','#0094cc','#0094cc','#0094cc','#0094cc','#0094cc','#0094cc','#0094cc','#0094cc','#0094cc','#0094cc','#0094cc', '#0094cc', '#0094cc','#0094cc']},
	 'domain': 'IN',
	 'legend': 'none',
	 'datalessRegionColor': '#e9e9e9',
	 'displayMode': 'regions',
	 'resolution': 'countries',
	 'sizeAxis': {minValue: 1, maxValue:1,minSize:10,  maxSize: 10},
	 'region':'world',
	 'keepAspectRatio': true,
	 'width': '115%',
	 'height': '800',
	 'magnifyingGlass': {enable: true, zoomFactor: 9},
	 'tooltip': {textStyle: {color: '#444444'}, isHtml: true},
	 'zoom': '1.25'
 };

	var chart = new google.visualization.GeoChart(document.getElementById('map_1541709038503'));
	function regionClickHandler(){
		const COUNTRY_ATTRIBUTES = "countries-worked where-we-work_container"
	        const regex = new RegExp("^[A-Z]+[a-z]*[A-Z]+")
		var selection =  chart.getSelection(),
				message = '',
		    		tempMessage,
		    		baseURL;
		try {
			switch(selection[0].row){
					case 0:
						message += '#Shanghai'
						break;
					case 1:
						message += '#Bangladesh'
						break;
					case 2:
						message += '#Brazil'
						break;
					case 3:
						message += '#Colombia'
						break;
					case 4:
						message += '#Ecuador'
						break;
					case 5:
						message += '#Ghana'
						break;
					case 6:
						message += '#Malawi'
						break;
					case 7:
						message += '#Morocco'
						break;
					case 8:
						message += '#Mumbai'
						break;
					case 9:
						message += '#Myanmar'
						break;
					case 10:
						message += '#Peru'
						break;
					case 11:
						message += '#Philippines'
						break;
					case 12:
						message += '#Rwanda'
						break;
					 case 13:
						message += '#SolomonIslands'
						break;
					case 14:
						message += '#SriLanka'
						break;
					case 15:
						message += '#Tanzania'
						break;
					case 16:
						message += '#PapuaNewGuinea'
						break;
					case 17:
						message += '#Zambia'
						break;
					case 18:
						message += '#Cambodia'
						break;
					case 19:
						message += '#Cameroon'
						break;
					case 20:
						message += '#Ethiopia'
						break;
					case 21:
						message += '#Mozambique'
						break;
					case 22:
						message += '#Senegal'
						break;
					case 23:
						message += '#Thailand'
						break;
					case 24:
						message += '#Uganda'
						break;
					case 25:
						message += '#Vietnam'
						break;
					case 27:
						message += '#Indonesia'
						break;
					case 29:
						message += '#SouthAfrica'
						break;
					case 30:
						message += '#Zimbabwe'
						break;
					default:
						message += '#Error';
						break;
			}
			if( arr.length > 0 ) {
				arr.pop();
			}
			if( message === '#Error'){ return; }
			arr.push(message);
			tempMessage = message;
			baseURL = new URL(window.location.href)
			if (message.indexOf('#') !== -1){
        		    message = message.slice(1);
       			}

			//hide country clicked 
		    	//if country code has more than 1 uppercase
		    	document.querySelectorAll('#countryList .country').forEach( function (e){
				//if any display none, display block then hide
				if(e.style.display === "none"){
					e.style.display = "block";
				}else{
				  //hide additional contents, need to loop through them
				  for(let i = 0; i < document.querySelectorAll('.hide').length;i++){
					document.querySelectorAll('.hide')[i].style.display = 'none';
				   }
			     	}
      				
				if(regex.test(message)){
					//pull into multiple words
					if(e.innerText === message.replace(/[A-Z]/g, " $&").slice(1).toUpperCase()){e.style.display = "none";}
				}else {
					if(e.innerText === message.toUpperCase()){e.style.display = "none";}
				}
			})
			
    			let country = document.getElementById(message);
			//add functionality to check message or country then do the following
			//if country with active does not match remove it and display country
			if(document.querySelectorAll('.countries-worked.active').length == 0){
				country.setAttribute('class', COUNTRY_ATTRIBUTES + ' active');
			}else{
				document.querySelectorAll('.countries-worked.active')[0].setAttribute('class', COUNTRY_ATTRIBUTES)
			  	country.setAttribute('class', COUNTRY_ATTRIBUTES + ' active');
			}
			window.location.href = `${baseURL.origin}${baseURL.pathname}${tempMessage}`
			//$.featherlight(`${message}`);
		}catch (err){
			console.log(err);
		}
	}

	google.visualization.events.addListener(chart, 'select', regionClickHandler);
	chart.draw(data, options);
}
