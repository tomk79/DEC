(function(){
	var timer = null;
	function getOffsetTopLeft( elm ) {
		var top=0, left=0;
		top+=elm.offsetTop;
		left+=elm.offsetLeft;
		if ( elm.offsetParent ) {
			var tmptop = getOffsetTopLeft( elm.offsetParent );
			top+=tmptop.top;
			left+=tmptop.left;
		}
		return {
			"top": top,
			"left": left
		};
	}
	function showDEC(){
		if(timer){clearTimeout(timer);}
		var tmpDECCV=document.querySelectorAll('*[data-dec-comment-viewer]');
		if(tmpDECCV.length){document.body.removeChild(tmpDECCV[0]);}
		var decs = document.querySelectorAll('*[data-dec]');
		var decBlocks = document.querySelectorAll('*[data-dec-block]');
		if(!decs.length&&!decBlocks.length){alert('no DEC found.');return;}
		var wrapper = document.createElement('div');
		wrapper.style.position='absolute';
		wrapper.style.top=0;
		wrapper.style.left=0;
		wrapper.setAttribute('data-dec-comment-viewer', '');
		for(var idx=0; decs.length>idx; idx++){
			var decOffset=getOffsetTopLeft(decs[idx]);
			var node = document.createElement('div');
			node.style.position='absolute';
			node.style.top=(decOffset.top)+'px';
			node.style.left=(decOffset.left)+'px';
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
		for(var idx=0; decBlocks.length>idx; idx++){
			decBlocks[idx].style.display = 'block';
			decBlocks[idx].style.border='5px solid #f00';
			decBlocks[idx].style.backgroundColor='#fdd';
			decBlocks[idx].style.padding='2px 10px';
			decBlocks[idx].style.margin='1em 10px';
		}
		document.body.appendChild(wrapper);
		timer=setTimeout(showDEC, 1000);
	}
	showDEC();
})();