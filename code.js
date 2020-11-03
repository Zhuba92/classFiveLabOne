$(document).ready(
    function ()
    {
        $("form").submit(getTitle);

        function getTitle(event)
        {
            // stop the flashing form
            event.preventDefault();

            // get their first name
            var firstName = $("#firstName").val();

            // get their last name
            var lastName = $("#lastName").val();

            // get their title
            var title = $("input[name=title]:checked").val();
            var color = $("input[name=title]:checked").data("color");
            var abv = $("input[name=title]:checked").data("abv");

            // change colors for ranks
            $("#output").css("color",color);

            // output title and name
            $("#output").text("Hello" + " " + title + " " + firstName + " " + lastName);
        }
    }
);