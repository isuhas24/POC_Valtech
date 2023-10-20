// function toggleDiv(){
//     // $("#div1").hide();
//     // $("#div2").show();

//     if(!($("#div1").is(":hidden")) && $("#div2").is(":hidden")){
//         $("#div1").hide();
//         $("#div2").show();
//     }
//     else if(!($("#div2").is(":hidden")) && $("#div1").is(":hidden")){
//         $("#div2").hide();
//         $("#div1").show();
//     }
// }

// $(() => {
//     $("#div2").hide();
//     setInterval(() => {
       

//         setTimeout(() => {
//             toggleDiv();
//         },2000);
//     },3000);
// })

function toggleSection(){
    if(!($("#section4_testimonial1").is(":hidden")) && $("#section4_testimonial2").is(":hidden")){
        $("#section4_testimonial1").hide();
        $("#section4_testimonial2").show();
    }
    else if(!($("#section4_testimonial2").is(":hidden")) && $("#section4_testimonial1").is(":hidden")){
        $("#section4_testimonial2").hide();
        $("#section4_testimonial1").show();
    }
}

$(() => {
    $("#section4_testimonial2").hide();
    setInterval(() => {
        setTimeout(() => {
            toggleSection();
        },5000);
    },5000);
})


