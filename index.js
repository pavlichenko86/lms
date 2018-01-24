let btn = document.getElementById('btn2');
let btn2 = document.getElementById('btn');
let form = document.getElementById('form');
btn.addEventListener('click', post);
btn2.addEventListener('click', get);

function get(){
	let status = function (response) {
	  if (response.status !== 200) {
	    return Promise.reject(new Error(response.statusText))
	  }
	  return Promise.resolve(response)
	}
	let json = function (response) {
	  return response.json()
	}

	fetch('http://my-json-server.typicode.com/pavlichenko86/lms/themes')
	  .then(status)
	  .then(json)
	  .then(function (data) {
	    for(var i=0;i<data.length;i++){
	        form.append('<p> ID: ' + data[i].id + ', TITLE: ' + data[i].title + ', HOURS: ' + data[i].hours + ', DEADLINE: ' + data[i].deadline + ', TEXT: ' + data[i].text + '</p>');
	    }
	  })
	  .catch(function (error) {
	    console.log('error', error)
	  })
}
function post(){
 fetch('http://my-json-server.typicode.com/pavlichenko86/lms/themes',{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
            title: "bbbb",
		     hours: 5,
		     deadline:"21.11.1111",
		     text: "sdfnfgsdggd g g g sdgd sdfgdfg sfg"})
        }).then((response)=>{
            if(response.status >= 200 && response.status < 300){
                return response;
            }else{
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }).then((response)=>{
            return response.json();
        }).then((data)=>{
            /* Process data */
        }).catch((error)=>{
            /* Catch Error */
        });
}


