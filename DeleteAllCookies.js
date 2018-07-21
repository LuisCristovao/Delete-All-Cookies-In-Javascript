function DeleteAllCookies()
{
			Cookie=document.cookie;
            console.log(Cookie.localeCompare('')!=-1);
			//if  not empty
			if(Cookie.localeCompare('')!=-1){
				cookies=Cookie.split(';');
                console.log(cookies);
				var cookies_names=[];
				cookies.forEach(function(cookie){cookies_names.push(cookie.split('=')[0]);}); 
				//deleting cookies
                console.log(cookies_names);
				cookies_names.forEach(function(name){document.cookie=name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;';});
				
			}
}