$(function() {
    var LIST = $('.listOfItems');
    var ITEM_TEMPLATE = $('.oneItem').html();
    var LEFT_ITEM_TEMPLATE = $('.leftItem').html();
    var LEFT_TO_BUY_LIST = $('.leftToBuyItems');
    var BOUGHT_LIST = $('.boughtItems');

    function addItem(title) {
        var node = $(ITEM_TEMPLATE);
        var rightNode = $(LEFT_ITEM_TEMPLATE);
        //Set the title of the product
        node.find('.title').text(title);
        rightNode.find('.itemName').text(title);
        rightNode.find('.quant').text(1);
        //Delete

        //Plus
        node.find('.plus').click(function () {
            var quant = parseInt(node.find('p.prodquant').text());
            node.find('p.prodquant').text(quant+1);
            rightNode.find('.quant').text(quant+1);
        });
        node.find('.minus').click(function () {
            var quant = parseInt(node.find('p.prodquant').text());
            if(quant>1) {
                node.find('p.prodquant').text(quant - 1);
                rightNode.find('.quant').text(quant-1);
            }
            else
                node.find('.minus').prop('disabled',true);

        });
        node.find('.buy').click(function () {
            node.fadeOut(function () {
                node.find('.buy').hide();
                node.find('.plus').css('visibility','hidden');
                node.find('.minus').css('visibility','hidden');
                node.find('.cancel').css('visibility','hidden');
                node.find('.unbuy').show();
                node.fadeIn(function () {
                    node.find('.products.title').css('text-decoration','line-through');
                    rightNode.find('.itemName').css('text-decoration','line-through');
                    rightNode.find('.quant').css('text-decoration','line-through');
                    rightNode.remove();
                    BOUGHT_LIST.append(rightNode);

                });
            });
        });

        node.find('.unbuy').click(function () {
            node.fadeOut(function () {
                node.find('.unbuy').hide();
                node.find('.buy').show();
                node.find('.plus').css('visibility','visible');
                node.find('.minus').css('visibility','visible');
                node.find('.cancel').css('visibility','visible');
                node.find('.products.title').css('text-decoration','none');
                node.fadeIn(function () {
                    rightNode.find('.itemName').css('text-decoration','none');
                    rightNode.find('.quant').css('text-decoration','none');
                    rightNode.remove();
                    LEFT_TO_BUY_LIST.append(rightNode);
                });
            });
        });

        node.find('.cancel').click(function () {
            rightNode.remove();
            node.remove();

        });

        node.find('.products.title').click(function () {
            node.find('.products.title').hide();
            node.find('.name').attr('value',node.find('.products.title').text());
            node.find('.name').show();
            node.find('.name').select();
        });

        node.find('.name').focusout(function () {
            node.find('.products.title').text(node.find('input.name').val());
            node.find('.products.title').show();
            node.find('input.name').hide();

        });
        LEFT_TO_BUY_LIST.append(rightNode);
        LIST.append(node);
    }

    $('#add').click(function () {
        var name = $('input').val();

        if(name)
        addItem(name);

    });


});