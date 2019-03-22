$(document).ready(function(){

    var calculator = $('<div>').addClass('calculator').appendTo(document.body);
    var display = $('<div>').addClass('display').appendTo(calculator);

    function clr() 
                { 
                    // document.getElementById("result").value = "" 
                    $("#result").val("") 
                } 


    // function dis(valu) 
    //             { 
    //                 // document.getElementById("result").value+=val 
    //                 // $("#result").val()+=valu 
    //                 parseInt($('#result').val())+=valu;
    //             }      
    
    
    function dis(val) 
    { 
        var resultValue = $("#result").val();
        $("#result").val( resultValue + val);
    }


    function solve() 
    { 
        
        let x = $("#result").val()
        let y = eval(x)
        $("#result").val(y);
    } 


    $('<input>').attr("id","result")
    .attr('type', 'text')
    .attr('placeholder', '0')
    .appendTo(display);


    function rootSq() {
        

        let x = $("#result").val()
        let y =  Math.sqrt(x) 
        $("#result").val(y);
        
      }

      function powSq() {
        // Math.pow(document.getElementById("result").value, 2);

        let x = $("#result").val()
        let y =  Math.pow(x, 2) 
        $("#result").val(y);
        
      }  


    var numbers = $('<div>').addClass('nubers').appendTo(calculator);


    for (let index = 19; index >= 0; index--) {
        var calcnumbers = $('<button>').addClass('colrNumbers');
        
        switch (index) {
            case 10:
                $(calcnumbers).text(".").click( function() {
                    dis(".");
                });
                break; 

            case 11:
                $(calcnumbers).text("C").click(clr);
                break;

            case 16:
                $(calcnumbers).text("=").click(solve);
                break;   

                case 19:
                $(calcnumbers).text("%").click( function() {
                    dis("%");
                });
                break;
                
                case 18:
                $(calcnumbers).text("√").click(rootSq);
                break;

                case 17:
                $(calcnumbers).text("xy").click(powSq);
                break;
                
                case 15:
                $(calcnumbers).text("+").click( function() {
                    dis("+");
                });
                break;

                case 12:
                $(calcnumbers).text("/").click( function() {
                    dis("/");
                });
                break;
            
                case 14:
                $(calcnumbers).text("-").click( function() {
                    dis("-");
                });
                break;  
                
                case 13:
                $(calcnumbers).text("*").click( function() {
                    dis("*");
                });
                break;    

            // case 5:
            //     $(calcnumbers).text("5").click( function() {
            //         dis("5");
            //     });
            //     break;  

            // case 4:
            //     $(calcnumbers).text("4").click( function() {
            //         dis("4");
            //     });
            //     break; 
                
            //     case 3:
            //     $(calcnumbers).text("3").click( function() {
            //         dis("3");
            //     });
            //     break;   


            //     case 2:
            //     $(calcnumbers).text("2").click( function() {
            //         dis("2");
            //     });
            //     break;   
        
            default:
            $(calcnumbers).text(index).click( function() {
                dis(index);
            });
            break;   
        }
        $(calcnumbers).appendTo(numbers);

    }




})


