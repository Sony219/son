$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        footer: {
            description: "A simple website to document our adventures!",
            name: "Matt Strayer",
        }
    })
    $("#target").html(rendered);
});