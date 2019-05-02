let search = document.getElementById("go");

search.onclick = searchJson;

function searchJson()
{
    clearDiv();
    let text = $("#userInput").val();



    $.getJSON("json-search.json",function(whatever)
    {
        let foundItem = false;
        $.each(whatever, function(input1,input2)
        {

            if(input2.name.toLowerCase().includes(text.toLowerCase()))
            {
                foundItem=true;
                $("#output").append('<p>Name: ' + input2.name + '</p>');
                $("#output").append('<p>Sex: ' + input2.sex + '</p>');
                $("#output").append('<p>Born: ' + input2.born + '</p>');
                $("#output").append('<p>Died: ' + input2.died + '</p>');
                $("#output").append('<p>Father: ' + input2.father + '</p>');
                $("#output").append('<p>Mother: ' + input2.mother + '</p>');
            }
        });
        if(foundItem == false)
        {
            $("#output").append("<p>No results found!</p>");
        }
    });

}

function clearDiv()
{
    $("#output").html("");
}



