console.log($("h3").text());

console.log($("ul li").text());


$("h3").text("five in the car fifteen in the house");
var btnStyle={
    backgroundColor:"red",
    fontSize:"17px",
    color:"white",
}
function singUp(){
    var name=$("#name").val();
    var surname=$("#surname").val();

    console.log(name+" "+surname+" singed system.");
    $("#name").css("backgroundColor","lightblue");
    $("#surname").css("backgroundColor","blue");

}
