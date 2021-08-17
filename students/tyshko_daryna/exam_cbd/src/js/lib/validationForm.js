import $ from 'jquery';

// Validation Form
function formValidationFooter() {
    function validateEmail(email) {
        const remail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return remail.test(email);
    }

    function validateUser(userName) {
        const ruser = /^[a-zA-Z0-9]+$/;
        return ruser.test(userName);
    }

    let checkName = false;
    function validate2() {
        const $result2 = $("#result2");
        const userInput = document.querySelector('#userName');
        const userName = $("#userName").val();
        $result2.text("");
        userInput.style.borderColor = "green";
        if (validateUser(userName)) {
            $result2.text(userName + " is valid :)");
            $result2.css("color", "green");
            $('#userName').css("borderColor", "green");
            checkName = true;
        } else {
            $result2.text(userName + " is not valid :(");
            $result2.css("color", "red");
            userInput.style.borderColor = "red";
            checkName = false;
        }
        if (checkName === true) {
            setAttribFalse();
        } else setAttribTrue();
    }

    const setAttribTrue = function setTrue() {
        $('input[type="submit"]').prop('disabled', true);
    };
    const setAttribFalse = function setFalse() {
        $('input[type="submit"]').prop('disabled', false);
    };

    let checkEmail = false;
    function validate() {
        const $result = $("#result");
        const emailInput = document.querySelector('#email');
        const email = $("#email").val();
        $result.text("");
        emailInput.style.borderColor = "red";

        if (validateEmail(email)) {
            $result.text(email + " is valid :)");
            $result.css("color", "green");
            emailInput.style.borderColor = "green";
            checkEmail = true;
        } else {
            $result.text(email + " is not valid :(");
            $result.css("color", "red");
            emailInput.style.borderColor = "red";
            checkEmail = false;
        }
        if (checkEmail === true) {
            setAttribFalse();
        } else setAttribTrue();
    }

    $("#email").on("input", validate);
    $("#userName").on("input", validate2);

    $(document).ready(function () {
        let setNameColorRed = function setNameColorRedFunction() {
            $("#result2").text('Input your name');
            $("#result2").css("color", "red");
            $('#userName').css("borderColor", "red");
        }
        let setEmailColorRed = function setNameColorRedFunction() {
            $("#result").text('Input your email');
            $("#result").css("color", "red");
            $('#email').css("borderColor", "red");
            event.preventDefault();
        }
        $('input[type="submit"]').on('click', function () {
            if ($("#userName").val().length === 0) {
                setNameColorRed();
                event.preventDefault();
            }
            if ($("#email").val().length === 0) {
                setEmailColorRed();
                event.preventDefault();
                return;
            }
        });
    });
};

export default formValidationFooter;
