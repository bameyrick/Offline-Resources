var resources = [];
var r = 0;

var xhr = new XMLHttpRequest();

xhr.onload = function(){

	var arr = new Uint8Array(xhr.response);

	/* store array in webSQL, IndexedDB or variable(session only).. shown here is variable */

	resources.push(arr);

	/* generate url for item */
	var blob = new Blob([resources[r]], {type: /* use correct mime type here */ 'video/mp4'});
	v++;

	URL = URL || webkitURL;
	var url = URL.createObjectURL(blob);

	/* here you would add your link to the href / src of the link / button that would retrieve the item */
}

xhr.onprogress = function(e){
	if(e.lengthComputable){
		var percentage = Math.round((e.loaded / e.total) * 100);

		/* here you would update a loading readout, e.g. */
		document.getElementById("loading").innerHTML(percentage + "%");
	}
}


xhr.open("GET", /* resource url */, /* async*/ true);
xhr.responseType = "arraybuffer";
xhr.send();