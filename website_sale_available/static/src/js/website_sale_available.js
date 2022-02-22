$(document).ready(function () {
    if (! $('#cart_products') )
        return;

    var input_selector = 'input[data-product-id]';

    function check(el){
        if (!el)
            el = input_selector;

        var available = true;
        $(el).each(function(){
            var quantity =  parseInt($(this).val());
            $tr = $(this).parent().parent().parent();
            var typrod = $tr.find('[name="type_product"]').text().trim()
            var virtual_available = parseInt($tr.find('[name="virtual_available"]').text())
            var enough = quantity <= virtual_available
            if (typrod != "service")
                $tr.toggleClass('warning', !enough);
            if (!enough && typrod != "service")
                available = false;
        })
        $('a[href$="/shop/checkout"]').toggleClass('disabled', !available);
    }
    
    $(input_selector).on('change', function(){
        check(this)
    })

    check();

})

