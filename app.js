var viewModelMainPage;
$(function() {
    $("#divTab").tabs();

    viewModelMainPage = {
        login:function() {
            $.get("data.txt", function(data) {
                data = JSON.parse(data);
                $("#iframePage1")[0].contentWindow.showModal(data[0]);
                $("#iframePage2")[0].contentWindow.showID(data[1]);
            });
        }
    };

    ko.applyBindings(viewModelMainPage);
});