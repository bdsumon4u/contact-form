(function ($) {
    "use strict";

    // Form
    var contactForm = function () {
        if ($("#contactForm").length > 0) {
            $("#contactForm").validate({
                rules: {
                    name: "required",
                    subject: "required",
                    email: {
                        required: true,
                        email: true,
                    },
                    message: {
                        required: true,
                        minlength: 5,
                    },
                },
                messages: {
                    name: "Please enter your name",
                    subject: "Please enter your subject",
                    email: "Please enter a valid email address",
                    message: "Please enter a message",
                },
                /* submit via ajax */

                submitHandler: function (form) {
                    var $submit = $(".submitting"),
                        waitText = "Submitting...";
                    $submit.css("display", "block").text(waitText);

                    window.location =
                        "mailto:sumon@ahmed.com?subject=" +
                        encodeURIComponent(
                            document.getElementById("subject").value
                        ) +
                        "&body=" +
                        encodeURIComponent(
                            document.getElementById("message").value +
                                " From: " +
                                document.getElementById("name").value +
                                "[" +
                                document.getElementById("email").value +
                                "]"
                        );
                }, // end submitHandler
            });
        }
    };
    contactForm();
})(jQuery);
