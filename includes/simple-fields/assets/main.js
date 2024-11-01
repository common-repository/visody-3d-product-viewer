(()=>{"use strict";jQuery((function(e){e.fn.refreshRepeaterIndexes=function(){var t=this.children(),i=this.data("name");e(t).each((function(t){e(this).find(".visody-repeater-item__field").each((function(a){var n,s=e(this).data("type"),l=e(this).data("name");switch(s){case"textarea":case"editor":n="textarea";break;case"select":n="select";break;default:n="input"}e(this).find(n).attr("name",i+"["+t+"]["+l+"]")})),e(this).find(".visody-index").text(t)}))},e("body").on("click",".visody-upload-img-button",(function(t){t.preventDefault();var i=e(this),a=i.next().next().val(),n=wp.media({title:visodyObject.insertImage,library:{type:"image"},button:{text:visodyObject.useThisImage},multiple:!1}).on("select",(function(){var e=n.state().get("selection").first().toJSON();i.removeClass("button").html('<img class="visody-pre-img" src="'+e.url+'" style="max-width:300px;display:block;" />').next().next().val(e.id).next().show()})).on("close",(function(){}));n.on("open",(function(){if(a){var e=n.state().get("selection"),t=wp.media.attachment(a);t.fetch(),e.add(t?[t]:[])}})),n.open()})),e("body").on("click",".visody-remove-img-button",(function(){return e(this).hide().prev().val("").prev().prev().addClass("button").html(visodyObject.uploadImage),!1})),e("body").on("click",".visody-upload-file-button",(function(t){t.preventDefault();var i=e(this),a=i.next().val(),n=wp.media({title:visodyObject.insertFile,button:{text:visodyObject.useThisFile},multiple:!1}).on("select",(function(){var e=n.state().get("selection").first().toJSON();i.removeClass("button").addClass("visody-upload-file-button--selected").html('<span class="visody-upload-file-button__icon"><img src="'+e.icon+'" alt=""></span><span class="visody-upload-file-button__fname">'+e.filename+"</span>"),i.next().val(e.id).next().show()})).on("close",(function(){}));n.on("open",(function(){if(a){var e=n.state().get("selection"),t=wp.media.attachment(a);t.fetch(),e.add(t?[t]:[])}})),n.open()})),e("body").on("click",".visody-remove-file-button",(function(){return e(this).hide().prev().val("").prev().addClass("button").removeClass("visody-upload-file-button--selected").html(visodyObject.uploadFile),!1})),e(".visody-gallery-field").sortable({items:"li",cursor:"-webkit-grabbing",scrollSensitivity:40}),e(".visody-repeater-container").sortable({items:".visody-repeater-item",cursor:"-webkit-grabbing",scrollSensitivity:40,handle:".visody-repeater-item__handle",stop:function(t,i){e(t.target).refreshRepeaterIndexes()}}),e("body").on("click",".visody-upload-images-button",(function(t){t.preventDefault();var i=e(this),a=i.parent().find(".visody-gallery-field"),n=i.data("name"),s=[];a.find("li").each((function(t){s.push(e(this).data("id"))}));var l=wp.media({title:visodyObject.insertImages,library:{type:"image"},button:{text:visodyObject.useThisImages},multiple:!0}).on("select",(function(){var t=l.state().get("selection").map((function(e){return e.toJSON(),e}));a.empty(),t.map((function(e){a.append('<li data-id="'+e.id+'"><span style="background-image:url('+e.attributes.url+')"></span><a href="#" class="visody-gallery-remove">&times;</a><input type="hidden" name="'+n+'[]" value="'+e.id+'" /></li>')})),e(".visody-gallery-field").sortable("refresh")}));l.on("open",(function(){if(s){var e=l.state().get("selection"),t=s.map((function(e){var t=wp.media.attachment(e);return t.fetch(),t}));e.add(t||[])}})),l.open()})),e("body").on("click",".visody-gallery-remove",(function(t){t.preventDefault(),e(this).parent().attr("data-id");var i=e(this).parent().parent();e(this).parent().remove(),i.sortable("refresh")})),e("body").on("mousedown",".visody-gallery-field li",(function(){var t=e(this);t.parent().find("li").removeClass("visody-gallery-active"),t.addClass("visody-gallery-active")})),e(".visody-datepicker").each((function(){var t=e(this);t.datepicker({showAnim:!1,dateFormat:t.data("dateformat"),minDate:t.data("mindate"),maxDate:t.data("maxdate")})})),e(".smf-show-if").each((function(t){var i=e(this).attr("class").split(" "),a="",n="",s=e(this);i.forEach((function(e){e.startsWith("show-if--")&&(e=e.split("--"),a=e[1],n=e[2].split("||"))}));var l=e('[name="'+a+'"]'),r=l.val();"checkbox"==l.attr("type")&&(r=l.is(":checked")?"yes":"no"),"radio"==l.attr("type")&&(r=e('[name="'+a+'"]:checked').val()),n.includes(r)||s.hide(),e('[name="'+a+'"]').change((function(){var t=e(this).val();"checkbox"==e(this).attr("type")&&(t=e(this).is(":checked")?"yes":"no"),n.includes(t)?s.show():s.hide()}))})),e("body").on("click",".visody-repeater-add",(function(t){t.preventDefault();var i=e(this).parent().prev();i.children().first().clone().show().appendTo(i),i.refreshRepeaterIndexes(),i.children().last().find(".visody-gallery-field").sortable({items:"li",cursor:"-webkit-grabbing",scrollSensitivity:40})})),e("body").on("click",".visody-repeater-remove",(function(t){t.preventDefault();var i=e(this).closest(".visody-repeater-item"),a=i.parent();i.remove(),a.refreshRepeaterIndexes()}))}))})();