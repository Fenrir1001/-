$(document).ready(function () {


    $('input').keydown(function () {
        $(this).val($(this).val().replace(/\D/, ''));
    });

    $('.input_number').click(function () {
        var number = $(this).text();
        var value = $('input').val() + number;
        $('input').val(value);
    });

    $('.clear_input').click(function () {
        $('input').val('');
    });

    var first_number;


    $('.action').click(function () {
        first_number = parseFloat($('input').val());
        type_action = $(this).text();
        $('input').val('');
    });

    $('.get_result').click(function () {
        var second_number = parseFloat($('input').val());


        if (type_action == '-') {
            var result = first_number - second_number;
        }
        if (type_action == '+') {
            var result = first_number + second_number;
        }
        if (type_action == '*') {
            var result = first_number * second_number;
        }
        if (type_action == '/') {
            var result = first_number / second_number;
        }
        result = result.toFixed(2);
        $('input').val(result);
    });

});

