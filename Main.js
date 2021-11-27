function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ncKQUFqIZ/',modelReady);

}

function modelReady(){
    classifer.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255)+ 1;
        random_number_g = Math.floor(Math.random() * 255)+ 1;
        random_number_b = Math.floor(Math.random() * 255)+ 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";


        img = document.getElementById('dog1');
        img1 = document.getElementById('lion2');
        img2 = document.getElementById('cow3');
        img3 = document.getElementById('cat4');


        if (results[0].label == "Clap") {
            img.src = '330616-norm-the-dog.gif';
            img1.src = '36352-lion-running.png';
            img2.src = '52886-cow-eating-grass.png';
            img3.src = '68349-cat-tail-wag.png';

        } else if (results[0].label == "Bell") {
            img.src = '30616-norm-the-dog.png';
            img1.src = '36352-lion-running.gif';
            img2.src = '52886-cow-eating-grass.png';
            img3.src = '68349-cat-tail-wag.png';
        } else if (results[0].label == "Snapping")  {
            img.src = '30616-norm-the-dog.png';
            img1.src = '36352-lion-running.png';
            img2.src = '52886-cow-eating-grass.gif';
            img3.src = '68349-cat-tail-wag.png';
        }else{
            img.src = '30616-norm-the-dog.png';
            img1.src = '36352-lion-running.png';
            img2.src = '52886-cow-eating-grass.png';
            img3.src = '68349-cat-tail-wag.gif';
        }

    }
}