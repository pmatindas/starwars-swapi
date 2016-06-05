(function(){
	'use strict';

	angular.module('starwarsApp')
	.controller('SpeciesController', SpeciesController);	

	function SpeciesController($scope, $http, starwarsConfig){	
		var speciesCtrl = this;

		speciesCtrl.personList = [];

		speciesCtrl.nextPage = null;
		speciesCtrl.isEndofPage = false;
		speciesCtrl.scrollInProgress = false;

		speciesCtrl.initData = InitData;

		speciesCtrl.toggleFlag = function(item)
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
			speciesCtrl.inProgress =true;		
			var apiUrl = starwarsConfig.swapiUrl+starwarsConfig.swapiSpecies;
			
			//only fetch data if not the end of page
            if (speciesCtrl.isEndofPage===false)
            {
				if (speciesCtrl.nextPage)
				{
					apiUrl = speciesCtrl.nextPage;
				}			
				$http.get(apiUrl).success(function(data){
					if (speciesCtrl.personList.length>0)
					{
						speciesCtrl.personList.push.apply(speciesCtrl.personList, data.results);				
					}
					else
					{
						speciesCtrl.personList = data.results;	
					}
					speciesCtrl.nextPage = data.next;

					if(!data.next)
					{
						speciesCtrl.isEndofPage = true;
					}

					speciesCtrl.inProgress =false;
				});
			}			
		}

		//run process
		speciesCtrl.initData();

		// return speciesCtrl;
	};	
})();