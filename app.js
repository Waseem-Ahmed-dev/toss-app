 const h1 = document.querySelector("#result");
 const img = document.querySelector("#img");

function toss(selected) {
  console.log(selected);
  let randomNumber = Math.ceil(Math.random() * 2);
  console.log(randomNumber);

  if (
     (selected === "Masjid" && randomNumber === 1) ||
     (selected === "Chand" && randomNumber === 2)
   ) {
     console.log("you won the toss");
     h1.innerHTML = "you won the toss";
   } else {
     console.log("you loss the toss");
     h1.innerHTML = "you loss the toss";

   }



    if (randomNumber === 1) {
     img.src = "https://i.ebayimg.com/images/g/KQYAAOSwUf5hoOxr/s-l400.jpg";
   } else {
     img.src =
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tw4hcmRWSf0AqckqAr5MGn_zSvPaiS5PWPUo1VBPIyv9mO_vWqXRzIRDgR1L4WEvon0&usqp=CAU";
   }
}
   