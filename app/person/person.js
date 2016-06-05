(function(){
	'use strict';

	angular.module('starwarsApp')
	.controller('PersonController', PersonController);	

	function PersonController($scope, $http, starwarsConfig){	
		var personCtrl = this;

		personCtrl.personList = [];

		personCtrl.nextPage = null;
		personCtrl.isEndofPage = false;
		personCtrl.scrollInProgress = false;

		personCtrl.initData = InitData;

		personCtrl.toggleFlag = function(item)
		{			
			if (item.detailPanelOpened === true)
			{
				item.detailPanelOpened = false;				
			}
			else
			{
				item.detailPanelOpened = true;				
			}			
		}

		function InitData(){	
			personCtrl.inProgress =true;		
			var apiUrl = starwarsConfig.swapiUrl+starwarsConfig.swapiPerson;
			
			//only fetch data if not the end of page
            if (personCtrl.isEndofPage===false)
            {
				if (personCtrl.nextPage)
				{
					apiUrl = personCtrl.nextPage;
				}			
				$http.get(apiUrl).success(function(data){
					if (personCtrl.personList.length>0)
					{
						personCtrl.personList.push.apply(personCtrl.personList, data.results);				
					}
					else
					{
						personCtrl.personList = data.results;	
					}
					personCtrl.nextPage = data.next;

					if(!data.next)
					{
						personCtrl.isEndofPage = true;
					}

					personCtrl.inProgress =false;
				});
			}			
		}

		//run process
		personCtrl.initData();

		// return personCtrl;
	};	
})();