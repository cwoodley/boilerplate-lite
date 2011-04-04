$(document).ready(function() {
  // open external link in new tab/window
  // use rel="external" instead of target="_blank"
  $('a[rel="external"]').click( function() {
      this.target = "_blank";
  });

  //email replacement
  $("span.mailto").each(function(){
    exp = $(this).text().search(/\((.*?)\)/) != -1 ? new RegExp(/(.*?) \((.*?)\)/) : new RegExp(/.*/);
    match = exp.exec($(this).text());
    addr = match[1] ? match[1].replace(/ at /,"@").replace(/ dot /g,".") : match[0].replace(/ at /,"@").replace(/ dot /g,".");
    emaillink = match[2] ? match[2] : addr;
    subject = $(this).attr('title') ? "?subject="+$(this).attr('title').replace(/ /g,"%20") : "";
     $(this).after('<a class="email" href="mailto:'+addr+subject+'">'+ emaillink + '</a>');
  	$(this).remove();
  });
});