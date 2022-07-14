function Slctdisabled(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    if(s1.value == "Baku"){
        var optionArray = ['rayon seçin|Rayon seçin' ,'binəqədi|Binəqədi' ,
        'qaradağ|Qaradağ' , 'nərimanov|Nərimanov' , 'nəsimi|Nəsimi' , 'nizami|Nizami' , 
        'sabunçu|Sabunçu' , 'səbail|Səbail' , 'suraxanı|Suraxanı' ,
        'pirallahı|Pirallahı' , 'xətai|Xətai' , 'xəzər|Xəzər' , 'yasamal|Yasamal '];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s2.options.add(newoption);
    }
};


function Slct(s3,s4){
    var s3 = document.getElementById(s3);
    var s4 = document.getElementById(s4);
    s4.innerHTML = "";
    if(s3.value == "komptmr"){
        var optionArray = ['kateqoriya seçin|Kateqoriya seçin' ,'ekran qırılması|Ekran qırılması' ,
        'ekran dəyişdirilməsi|Ekran dəyişdirilməsi' , 'korpus qırığı|Korpus qırığı'];
    }
    if(s3.value == "kompgeriqaytar"){
        var optionArray = ['kateqoriya seçin|Kateqoriya seçin' , 'şəkillərin geri qaytarılması|Şəkillərin geri qaytarılması' ,
         'videoların geri qaytarılması|Videoların geri qaytarılması'];
    }
    if(s3.value == "lisenziya"){
        var optionArray = ['kateqoriya seçin|Kateqoriya seçin' , 'windows açar|Windows açar' , 
        'office açar|Office açar'];
    }
    if(s3.value == "ehtiyathisseleri"){
        var optionArray = ['kateqoriya seçin|Kateqoriya seçin' , 'adaptor|Adaptor' , 'batareya|Batareya' ,
         'ram|RAM' , 'ssd disk|SSD Disk' , 'hdd disk|HDD Disk'];
    }
    if(s3.value == "telefontmr"){
        var optionArray = ['kateqoriya seçin|Kateqoriya seçin' , 'ekran qırılması|Ekran qırılması' , 'ekran dəyişdirilməsi|Ekran dəyişdirilməsi' ,
         'korpus qırığı|Korpus qırığı' , 'anti udar|Anti udar'];
    }
    if(s3.value == "ehtiyathisseleri2"){
        var optionArray = ['kateqoriya seçin|Kateqoriya seçin' , 'adaptor|Adaptor' , 'batareya|Batareya' , 'aksesuarlar|Aksesuarlar'];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML = pair[1];
        s4.options.add(newoption);
    }
}

