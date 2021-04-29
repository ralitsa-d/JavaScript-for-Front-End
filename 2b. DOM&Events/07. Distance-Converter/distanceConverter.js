/*function attachEventsListeners() {
    let input = document.getElementById('inputDistance');
        let chosenFrom = document.getElementById('inputUnits');
        let chosenTo = document.getElementById('outputUnits');
        let toMeters =0;
        let output = document.getElementById('outputDistance');
        let result=0;
        function convert(){
        
        if(chosenFrom.selectedIndex == "0"){
            toMeters = (Number(input.value))*1000;
        }
        if(chosenFrom.selectedIndex == "1"){
            toMeters = (Number(input.value));
        }
        if(chosenFrom.selectedIndex == "2"){
            toMeters = (Number(input.value))*0.01;
        }
        if(chosenFrom.selectedIndex == "3"){
            toMeters = (Number(input.value))*0.001;
        }
        if(chosenFrom.selectedIndex == "4"){
            toMeters = (Number(input.value))*1609.34;
        }
        if(chosenFrom.selectedIndex == "5"){
            toMeters = (Number(input.value))*0.9144;
        }
        if(chosenFrom.selectedIndex == "6"){
            toMeters = (Number(input.value))*0.3048;
        }
        if(chosenFrom.selectedIndex = "7"){
            toMeters = (Number(input.value))*0.0254;
        }
        

        if(chosenTo.selectedIndex =="0"){
            result = toMeters/1000;
        }
        if(chosenTo.selectedIndex =="1"){
            result = toMeters;
        }
        if(chosenTo.selectedIndex =="2"){
            result = toMeters/0.01;
        }
        if(chosenTo.selectedIndex =="3"){
            result = toMeters/0.001;
        }
        if(chosenTo.selectedIndex =="4"){
            result = toMeters/1609.34;
        }
        if(chosenTo.selectedIndex =="5"){
            result = toMeters/0.9144;
        }
        if(chosenTo.selectedIndex =="6"){
            result = toMeters/0.3048;
        }
        if(chosenTo.selectedIndex =="7"){
            result = toMeters/0.0254;
        }
        output.value = result;
    }


    let button = document.getElementById('convert');
    button.addEventListener('click', convert());
}*/
    

function attachEventsListeners() {  
    document.getElementById("convert").addEventListener("click", function(){
       
        let inputDistance = Number(document.getElementById('inputDistance').value)
        let inputUnits = document.getElementById('inputUnits')
        let outputUnits = document.getElementById('outputUnits')
   
        let rates = [1000, 1, 0.01, 0.001, 1609.34, 0.9144, 0.3048, 0.0254]
 
        let from = (inputDistance * rates[inputUnits.selectedIndex]).toFixed(3)
        let to = (from / rates[outputUnits.selectedIndex]).toFixed(3)
 
        document.getElementById('outputDistance').value = to    
    });  
}


   