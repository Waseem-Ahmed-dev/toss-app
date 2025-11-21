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














//         * {
// box-sizing: border-box;
// margin: 0;
// padding: 0;
// font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
// }


// body {
// min-height: 100vh;
// display: flex;
// justify-content: center;
// align-items: center;
// background: linear-gradient(135deg, #4f46e5, #06b6d4);
// }


// div {
// background: #ffffff;
// padding: 2rem;
// border-radius: 20px;
// width: 95%;
// max-width: 420px;
// text-align: center;
// box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
// }


// div h1 {
// margin-bottom: 1.5rem;
// font-size: 2rem;
// color: #1f2937;
// }


/* button {
display: flex;
gap: 1rem;
justify-content: center;
flex-wrap: wrap;
margin-bottom: 1.5rem;
} */


// button {
// padding: 0.7rem 1.5rem;
// border: none;
// border-radius: 999px;
// background: #9da834;
// color: #fff;
// font-size: 1rem;
// cursor: pointer;
// transition: transform 0.2s ease, background 0.2s ease;
// }


// button:hover {
// background: #486422;
// transform: translateY(-2px);
// }
   