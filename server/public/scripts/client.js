$(document).ready(onReady)
let firstNumber = 0;
let secondNumber = 0;
let currentOperator = '';
let newProblem = 0;

function onReady() {
    console.log('jQ online');
    $('.digits').on('click', printNumberToCalc);
    $('.operator').on('click', storeOperator );
    $('.equalSign').on('click', equals);
    $('#clearButton').on('click', clearScreen);

}

function printNumberToCalc(){
    console.log('button was clicked');
    if (newProblem === 1) {
        $('#screen').val('');
        newProblem = 0;
    }
    $('#screen').val($('#screen').val()+$(this).val());

}

function storeOperator() {
    console.log('operator was clicked');
    firstNumber = $('#screen').val();
    currentOperator = $(this).val();
    $('#screen').val('');
    console.log('firstNumber is ', firstNumber);
    console.log('current operator is ', currentOperator);

}

function equals() {
    console.log('running equals');
    secondNumber = $('#screen').val();
    console.log('firstNumber is ', firstNumber);
    console.log('secondNumber is ', secondNumber);
    console.log('currentOperator is ', currentOperator);

    $('#equationList').append(`
        <li>${firstNumber} ${currentOperator} ${secondNumber}</li>
        `);


    $('#screen').val('');
    newProblem = 1;
}

function clearScreen() {
    console.log('clear was clicked');

    firstNumber = 0;
    secondNumber = 0;
    $('#screen').val('');

}


function launchEquation() {
    $.ajax({
        type: "POST",
        url: "/",
        data: {
            first: firstNumber,
            second: secondNumber,
            operator: currentOperator
        },
        statusCode: {
            200: function() {
                console.log('staus code successful');

            },
        },
    })
    .then(function(response){
        console.log(response);
        printAnswer(response);

    })
    .catch(function(err) {
        console.log(err);
        alert('error');

    });
}

function printAnswer(answer) {
    $('#screen').val(answer);
    $('#lastAnswer').empty();
    $('#lastAnswer').append(answer);
}