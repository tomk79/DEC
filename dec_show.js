(function(){
	var tmpDECCV=document.querySelectorAll('*[data-dec-comment-viewer]');
	if(tmpDECCV.length){document.body.removeChild(tmpDECCV[0]);}
	var decs = document.querySelectorAll('*[data-dec]');
	if(!decs.length){alert('no data-dec found.');return;}
	var wrapper = document.createElement('div');
	wrapper.style.position='absolute';
	wrapper.style.top=0;
	wrapper.style.left=0;
	wrapper.setAttribute('data-dec-comment-viewer', '');
	for(var idx=0; decs.length>idx; idx++){
		var node = document.createElement('div');
		node.style.position='absolute';
		node.style.top=(decs[idx].offsetTop)+'px';
		node.style.left=(decs[idx].offsetLeft)+'px';
		node.style.width=(decs[idx].offsetWidth)+'px';
		node.style.height='0px';
		node.style.fontSize='11px';

		var text = document.createElement('div');
		text.style.color='#000';
		text.innerHTML=decs[idx].getAttribute('data-dec');
		text.style.position='absolute';
		text.style.top='-2em';
		text.style.left='-2px';
		text.style.padding='2px 10px';
		text.style.border='2px solid #999';
		text.style.backgroundColor='#fff';

		var frm = document.createElement('div');
		frm.style.display='table';
		frm.style.position='absolute';
		frm.style.top='0px';
		frm.style.left='0px';
		frm.style.width=(decs[idx].offsetWidth-10)+'px';
		frm.style.height=(decs[idx].offsetHeight-10)+'px';
		frm.style.border='5px solid #f00';
		frm.style.backgroundColor='#fdd';
		frm.style.opacity='0.2';

		node.appendChild(frm);
		node.appendChild(text);
		wrapper.appendChild(node);
	}
	document.body.appendChild(wrapper);
})();