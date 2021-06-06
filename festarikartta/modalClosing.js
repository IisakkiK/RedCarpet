function suljePopup(modali) {
    document.getElementById(modali).style.display = "none";
    document.getElementById("tahtiraittiVideo").pause();
    document.getElementById("hyvinkaasaliVideo").pause();
    document.getElementById("juliaVideo").pause();
    document.getElementById("kinomaVideo").pause();
    document.getElementById("hotelsveitsiVideo").pause();
}

function avaaPopup(modali) {
    document.getElementById(modali).style.display = "block";
}

function avaaHyvinkaansali() {
    document.getElementById("modalHyvinkaansali").style.display = "block";
}

//Sivumenun sisältö
function avaaNav() {
    document.getElementById("sivuNavi").style.width = "70%";
    /*if(screen.width > 732) {
        document.getElementById("sivuNavi").style.width = "30%";
    }*/
    //document.getElementById("mapid").style.width = "30%";
}
function suljeNav(){
    document.getElementById("sivuNavi").style.width = "0";
    //document.getElementById("container").style.marginLeft = "0";
}

function avaaVideo() {
    document.getElementById("testivideo").style.width = "100%";
    /*if(screen.width > 732) {
        document.getElementById("testivideo").style.width = "70%";
    }*/
}
function suljeVideo() {
    document.getElementById("testivideo").style.width = "0";
}

function testinavi() {
    document.getElementById("testinavi").style.width = "70%";
    /*if(screen.width > 768) {
        document.getElementById("testinavi").style.width = "40%";
    }*/
}
function testinaviSulje() {
    document.getElementById("testinavi").style.width = "0";
}

function paikkaKohdistus(markkeri){
    document.getElementById("testinavi").style.width = "0";
    document.getElementById("sivuNavi").style.width = "0";
    map.setView(markkeri.getLatLng());
    for(var i = 0; i < 2; i++) {
        $(markkeri._icon).fadeOut(1000);
        $(markkeri._icon).fadeIn(1000);
    }
}

