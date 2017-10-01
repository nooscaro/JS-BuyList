$(function() {
    var LIST = $('.listOfItems');
    var ITEM_TEMPLATE = $('.oneItem').html();

    function addItem(title) {
        var node = $(ITEM_TEMPLATE);
        //Set the title of the product
        node.find('.title').text(title);
        //Delete
        node.find('.cancel').click(function () {
            node.remove();
        });
        LIST.append(node);
    }

    $('#add').click(function () {
        var name = $('input').val();
        addItem(name);
    });
});