
// variable for storing previose question number
let prevQuestion=0;



function handleclick (qNo){
  
    // Restoring previous question to its original state
    if(prevQuestion !== 0)
    {
    let prevItem = document.getElementById('answer' + prevQuestion);
    let prevQitem= document.getElementById('q' + prevQuestion);
    let prevArrow = document.getElementById('arrow' +prevQuestion);
    prevItem.style.display="none";
    prevQitem.style.color="hsl(240,6%,50%)"
    prevQitem.style.fontWeight=300;
    prevArrow.style.transform = "rotate(0deg)";
    }

    //Changing state of clicked question
    if(prevQuestion !== qNo)
    {
    let item = document.getElementById('answer' + qNo);
    let qitem= document.getElementById('q' + qNo);
     let arrow = document.getElementById('arrow' +qNo);
    item.style.display="block";
    qitem.style.color="hsl(237, 12%, 33%)"
    qitem.style.fontWeight=700;
    arrow.style.transform = "rotate(180deg)";
    prevQuestion =qNo;
    }
    else {
        //reseting previous question in case user wants to view same answer multiple times.
        prevQuestion =0;
    }
}