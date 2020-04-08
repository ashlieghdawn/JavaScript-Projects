function full_sentence(){
    var part_1="I have ";
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence.";
    var whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

function slice_Method(){
    var Sentence="All work and no play makes Johnny a dull boy.";
    var Section=Sentence.slice(27,33);
    document.getElementById("slice").innerHTML=Section;
}

function upper_Function(){
    var text=document.getElementById("up").innerHTML;
    document.getElementById("up").innerHTML=text.toUpperCase();
}

function lower_Function(){
    var text=document.getElementById("lower").innerHTML;
    document.getElementById("lower").innerHTML=text.toLowerCase();
}

function findFunction() {
    var str = "And the world spins round and round!"; 
    var n = str.search("spins");
    document.getElementById("find").innerHTML = n;
  }

  function string_Method(){
      var X=897;
      document.getElementById("Numbers_to_string").innerHTML = X.toString();
  }

  function precision_Method(){
      var x=123456.78912345;
      document.getElementById("precision").innerHTML=x.toPrecision(10);
  }

  function fixed_Method(){
      var num=4.456789;
      var n=num.toFixed(2);
      document.getElementById("fixed").innerHTML=n;
  }

  function primitive_Method(){
      var str="Hey there World!";
      var res=str.valueOf();
      document.getElementById("primitive").innerHTML=res;
  }

