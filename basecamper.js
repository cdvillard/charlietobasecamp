//Onclick function using *EventListener
//Time for some lucky Basecampers to meet someone.

//Camper constructor to list "Basecampers" with
function Camper(name, img, color1, color2, color3) {
  this.name = name;
  this.img = img;
  this.color1 = color1;
  this.color2 = color2;
  this.color3 = color3;
}

//Giving the "Basecampers" a place to hang
var basecampers = [];

//Here come the Basecamp Staff!
basecampers[0]  = new Camper("Conor", "images/basecampers/conor.png", "#2782b9", "#fdfff4", "#a67924");
basecampers[1]  = new Camper("Jamie", "images/basecampers/jamie.png", "#cecbde", "#d6a388", "#1e1e28");
basecampers[2]  = new Camper("Jason", "images/basecampers/jasonthe1st.png", "#5c5c1e", "#e8b9af", "#9f7658");
basecampers[3]  = new Camper("Jason", "images/basecampers/jasonthe2nd.png", "#c1bcda", "#ffd7e3", "#120e0f");
basecampers[4]  = new Camper("Jonas", "images/basecampers/jonas.png", "#4ad40f", "#fbbccd", "#be7157");
basecampers[5]  = new Camper("Mig", "images/basecampers/mig.png", "#bb5737", "#f8ad5c", "#141414");
basecampers[6]  = new Camper("Ryan", "images/basecampers/ryan.png", "#908a94", "#f292a0", "#de7b51");
basecampers[7]  = new Camper("Scott", "images/basecampers/scott.png", "#b7ca78", "#e99d85", "#867f91");
basecampers[8]  = new Camper("Shaun", "images/basecampers/shaun.png", "#848099", "#f9afbe", "#9f553c");
basecampers[9]  = new Camper("Andres", "images/basecampers/andres.png", "#517bff", "#fcc0b6", "#af7e6d");
basecampers[10] = new Camper("Dan", "images/basecampers/dan.png", "#9e5e43", "#e4aa85", "#120f16");
basecampers[11] = new Camper("Noah", "images/basecampers/noah.png", "#324156", "#ffddcd", "#010504");
basecampers[12] = new Camper("Wailin", "images/basecampers/wailin.png", "#4dbd75", "#e9ae84", "#010600");
basecampers[13] = new Camper("David", "images/basecampers/david.png", "#b2a8b3", "#9c9964", "#9e5e43");
basecampers[14] = new Camper("Eileen", "images/basecampers/eileen.png", "#888f99", "#fef1e9", "#683b12");
basecampers[15] = new Camper("Javan", "images/basecampers/javan.png", "#dfb771", "#ffdecc", "#020202");
basecampers[16] = new Camper("Jeffery", "images/basecampers/jeffery.png", "#c3a754", "#fcdfd1", "#1c1c1c");
basecampers[17] = new Camper("Jeremy", "images/basecampers/jeremy.png", "#ea330b", "#f9b9a0", "#d7a173");
basecampers[18] = new Camper("Nick", "images/basecampers/nick.png", "#daa174", "#3c5c67", "#fabea4");
basecampers[19] = new Camper("Pratik", "images/basecampers/pratik.png", "#5d607f", "#edc295", "#985707");
basecampers[20] = new Camper("Sam", "images/basecampers/sam.png", "#867f91", "#ecbbad", "#121615");
basecampers[21] = new Camper("Tom", "images/basecampers/tom.png", "#c87934", "#ffefdb", "#020200");
basecampers[22] = new Camper("Trevor", "images/basecampers/trevor.png", "#e8d998", "#b7977e", "#f9e2d0");
basecampers[23] = new Camper("Zach", "images/basecampers/zach.png", "#378aff", "#fbd0bd", "#a3825f");
basecampers[24] = new Camper("Ann", "images/basecampers/ann.png", "#08111a", "#fcfeff", "#d29500");
basecampers[25] = new Camper("Chase", "images/basecampers/chase.png", "#d5d4dc", "#f9d9c4", "#c4c3cb");
basecampers[26] = new Camper("Chris", "images/basecampers/chris.png", "#a3925a", "#f9ccc9", "#b19b9e");
basecampers[27] = new Camper("Emily", "images/basecampers/emily.png", "#74acff", "#f2bac5", "#d9544d");
basecampers[28] = new Camper("James", "images/basecampers/james.png", "#b7b6be", "#f8d5d9", "#e5d6b9");
basecampers[29] = new Camper("Jim", "images/basecampers/jim.png", "#e3e1ec", "#f7d2d9", "#a4877f");
basecampers[30] = new Camper("Joan", "images/basecampers/joan.png", "#d5f2f0", "#f6eceb", "#4e382d");
basecampers[31] = new Camper("Jordanee", "images/basecampers/jordanee.png", "#cdfbfb", "#fee7d7", "#ffce7a");
basecampers[32] = new Camper("Kristin", "images/basecampers/kristin.png", "#874f05", "#ead3cd", "#000905");
basecampers[33] = new Camper("Merissa", "images/basecampers/merissa.png", "#e1bf5d", "#f8d7e0", "#d29779");
basecampers[34] = new Camper("Michael", "images/basecampers/michael.png", "#b8b6c1", "#f7c8d0", "#756160");
basecampers[35] = new Camper("Natalie", "images/basecampers/natalie.png", "#7b9896", "#f7d2b5", "#e3c07e");
basecampers[36] = new Camper("Sylvia", "images/basecampers/sylvia.png", "#fdeeab", "#a99783", "#0a0b10");
basecampers[37] = new Camper("Tony", "images/basecampers/tony.png", "#ceedf0", "#ebd7be", "#c6c5cd");
basecampers[38] = new Camper("Anton", "images/basecampers/anton.png", "#c0bec9", "#ffccdc", "#cd9e8e");
basecampers[39] = new Camper("Eron", "images/basecampers/eron.png", "#aae100", "#fdafbc", "#74acff");
basecampers[40] = new Camper("John", "images/basecampers/john.png", "#757380", "#f3d3e0", "#c29a92");
basecampers[41] = new Camper("Matthew", "images/basecampers/matthew.png", "#91e50b", "#f7bfcc", "#f7bfcc");
basecampers[42] = new Camper("Nathan", "images/basecampers/nathan.png", "#e6094c", "#fdf1f5", "#f5d9c4");
basecampers[43] = new Camper("Taylor", "images/basecampers/taylor.png", "#9796a4", "#ffdbe5", "#563d39");
basecampers[44] = new Camper("Will", "images/basecampers/will.png", "#9ee6f5", "#fad6e0", "#e4c7b9");

//Need to track how many show up.
//Looking for ten at a time.
var i = 0;
var button = document.getElementById('camp-btn');
var listBaseCampers = function() {
    var j = Math.floor(Math.random()*basecampers.length);

    //Oooh, look, an image appears.
    document.getElementById("caricature").style.display = "inline";

    //Lucky one of ten!
    document.getElementById("Fill-1").setAttribute("fill",basecampers[j].color1);
    document.getElementById("Fill-2").setAttribute("fill",basecampers[j].color2);
    document.getElementById("Fill-3").setAttribute("fill",basecampers[j].color3);
    document.getElementById("caricature").src = basecampers[j].img;
    document.getElementById("name").innerHTML = basecampers[j].name;
    i++;
    //And I'll form the head!
    if (i == 10) {
      document.getElementById("caricature").src = "images/headshot.png";
      document.getElementById("name").innerHTML = "Charles";
      document.getElementById("color").innerHTML = "I want to add a few more to that pallete.";
      document.getElementById("Fill-1").setAttribute("fill", "#899394");
      document.getElementById("Fill-2").setAttribute("fill", "#c68b6d");
      document.getElementById("Fill-3").setAttribute("fill", "#4a2512");
      document.getElementById("camp-btn").innerHTML = "Keep clicking if you want to see more."
    }
};

//Hiding the image to begin with
document.getElementById("caricature").style.display = "none";

//Gotta turn it all on.
button.addEventListener("click", listBaseCampers, false);