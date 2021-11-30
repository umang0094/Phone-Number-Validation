


        var form = document.getElementById('form');
        var api = "http://apilayer.net/api/validate?access_key=604f9f8447849ba7f815de315048438d";
        var number

        form.addEventListener('submit',function(e){

            e.preventDefault()

            var number = document.getElementById("number").value;
            var countrycode = document.getElementById("countrycode").value;
            console.log(number)
            console.log(countrycode)

            fetch("http://apilayer.net/api/validate?access_key=604f9f8447849ba7f815de315048438d",{
                method:'POST',
                body:JSON.stringify({
                    number: number,
                    country_prefix : countrycode,
                    format : 1
                })
                })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data){
                    console.log(data);
                 })

        })

        //var number = document.getElementById("number").value;
        //var countrycode = document.getElementById("countrycode").value;
        
        //function myFunction(){
          //      console.log(number.value);
            //    console.log(countrycode.value);
               
        //}
        
