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
        //Plus
        node.find('.plus').click(function () {
            var quant = parseInt(node.find('p.prodquant').text());
            node.find('p.prodquant').text(quant+1);

        });
        node.find('.minus').click(function () {
            var quant = parseInt(node.find('p.prodquant').text());
            if(quant>1)
            node.find('p.prodquant').text(quant-1);

        });
        LIST.append(node);
    }

    $('#add').click(function () {
        var name = $('input').val();

        if(name)
        addItem(name);

    });


});