$.fn.waterFall=function(obj){
	var option = $.extend({gap:20},obj);//间隙
	var item = $(this).children('.item');
	var wd = item.width()+option.gap;
	var count = Math.floor($(this).width()/item.width());//列数
	var column = [];
	$('.item').each(function(index, ele) {
		if(index<count){
			$(ele).css({
				top:0,
				left:index*wd
			});
			column[index]=$(ele).height();
			// console.log(column);
		}else {
			var minHeight = column[0];
			var pic = 0;
			for(var i =0;i<column.length;i++){
				if(minHeight>column[i]){
					minHeight = column[i];
					pic = i;
				}
			}
			$(ele).css({
				top:minHeight,
				left:pic*wd
			});
			column[pic]+=$(ele).height()+option.gap;
		}
	});
	//计算p
	var maxHeight = column[0];
		for(var i =0;i<column.length;i++){
			if(maxHeight<column[i]){
				maxHeight = column[i];
			}
		}
	$('.items').height(maxHeight);

}