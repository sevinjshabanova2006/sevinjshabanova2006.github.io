function openSwal(){
    swal({
        title: "Qiymət təklif edin.",
        input: "number", 
        inputValue: "0.00",
        inputStep: "0.01",
        inputPlaceholder: "",
        showCancelButton: true,
        cancelButtonText: 'Ləğv edin',
        confirmButtonText: "Təqdim edin",
        inputValidator: function(value) { // validates your input
          return new Promise(function(resolve, reject) {
            if (value != '' && value != null) {
              // document.getElementById('closeComment').value = value; // assign this to other elements in your form
              swal("Təklifiniz yönləndirildi", "Sizin təklifiniz: " + value, "success");
              // call other functions or do an AJAX call or sumbit your form
            }
            else {
              reject('Please enter a valid text');
            }
          });
        }
      })
    };


function Message(){
      swal({
          title: "Mesaj yazın.",
          input: "textarea",
          inputPlaceholder: "",
          showCancelButton: true,
          cancelButtonText: 'Ləğv edin',
          confirmButtonText: "Təqdim edin",
          inputValidator: function(value) { // validates your input
            return new Promise(function(resolve, reject) {
              if (value != '' && value != null) {
                // document.getElementById('closeComment').value = value; // assign this to other elements in your form
                swal("Mesajınız göndərildi.", "Sizin mesajınız: " + value, "success");
                // call other functions or do an AJAX call or sumbit your form
              }
              else {
                reject('Please enter a valid text');
              }
            });
          }
        })
      }



const open = document.getElementById('btn1');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () =>{
    modal_container.classList.add('show');
});
close.addEventListener('click', () =>{
    modal_container.classList.remove('show');
});

const open2 = document.getElementById('btn2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');

open2.addEventListener('click', () =>{
    modal_container2.classList.add('show');
});
close2.addEventListener('click', () =>{
    modal_container2.classList.remove('show');
});

const open3 = document.getElementById('btn3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');

open3.addEventListener('click', () =>{
    modal_container3.classList.add('show');
});
close3.addEventListener('click', () =>{
    modal_container3.classList.remove('show');
});
