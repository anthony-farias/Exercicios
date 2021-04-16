
    function sortear(){
    alfabeto=["a","b","c","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    i= Math.ceil(Math.random()*alfabeto.length-1);
    var letra = document.getElementById("letra");
    letra.innerHTML =alfabeto[i];

    }
    function calcularChurrasco(){
        var inputAdultos = document.getElementById("adultos");
        var inputCriancas = document.getElementById("criancas");
        var inputHoras = document.getElementById("horas");
        var resultado=document.getElementById("resultadoChurras");
        
        var adultos=inputAdultos.value;
        var criancas=inputCriancas.value;
        var horas=inputHoras.value;
        
        var cerveja = 1000;
        var carne = 500;
        var refri = 200;

        if(horas>=3){
            cerveja=1800;
            carne=700;
            refri=300;
        }
        function calcCarne(nA,nC,ca){
            qntCarne = (nA*ca)+(nC*ca/2);
            return qntCarne;
        }
        function calcRefri(nA,nC,r){
            qntRefri = (nA*r)+(nC*r*3);
            return qntRefri;
        }
        function calcCerveja(nA,ce){
            qntCerveja = nA*ce;
            return qntCerveja;
        }

        kgCarne = Math.ceil(calcCarne(adultos,criancas,carne));
        liRefri = Math.ceil(calcRefri(adultos,criancas,refri));
        liCerveja = Math.ceil(calcCerveja(adultos,cerveja));
        
        resultado.innerHTML= `<p>${kgCarne}g de carne</p>`
        resultado.innerHTML+= `<p>${liRefri}ml de refrigerante</p>`
        resultado.innerHTML+= `<p>${liCerveja}ml de cerveja</p>`
    }
    function calcularIMC(){

        var inputAltura=document.getElementById("altura");
        var inputPeso=document.getElementById("peso");
        var resultadoIMC=document.getElementById("resultadoIMC")
        var altura=inputAltura.value;
        var peso=inputPeso.value;

        var imc = (peso/(altura*altura)).toFixed(1)

        if(imc<18.5){
            status="MAGREZA"
        }else if(imc>18.5&imc<24.9){
            status="PESO NORMAL"
        }else if(imc>25&imc<29.9){
            status="SOBREPESO"
        }else if(imc>30&imc<39.9){
            status="OBESIDADE"
        }else if(imc>40){
            status="OBESIDADE GRAVE"
        }

        resultadoIMC.innerHTML=`<p>SEU IMC ATUAL É: ${imc}.</p>
        <p>A SITUAÇÃO ATUAL DO SEU PESO É: ${status}.</p>
        <p>UM IMC CONSIDERADO NORMAL ESTA ENTRE 18.5 e 24.9.</p>`
        console.log(imc)

    }
   