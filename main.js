prediction_1="";
prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1Ye-CIWsK/model.json',modelloaded);
function modelloaded(){
    console.log('modelloaded');
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata1="the first prediction "+prediction_1 ;
    speakdata2="and the second prediction "+prediction_2;
    var utterthis=new speechSynthesisUtterence(speakdata1+speakdata2);
    synth.speak(utterthis);  
}