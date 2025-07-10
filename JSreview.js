var course ="Technology";
let myName ="Bhavesh";
console.log(`This page was created in the STEM PREP ${course} by ${myName}`);
alert(`This page was created in the STEM PREP ${course} by ${myName}`);
function output()
{
  let Name = document.getElementById("Name").value;
  let School = document.getElementById("School").value;
  let Grade = docuemnt.getElementById("Grade").value;

var output="Name: <b>" + Name + "</b><br>";
  output += "Grade: <b>" + Grade + "</b><br>";
  output += "School: <b>" + School + "</b><br>";
document.getElementById("output").innerHTML = output;
}
