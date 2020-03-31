function my_Dictionary(){
    var Animal={
        Species:"Frog",
        Color:"Green",
        Age: 2,
        Sound:"Ribbit",
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}
