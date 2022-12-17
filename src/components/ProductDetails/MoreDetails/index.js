// import React from "react";

// const MoreDetails = () => {
    
//   return (
//     <>
//       <div class="frequntly-question-class">
//         <section>
//           <div class="faq">
//             <div class="question">
//               <p>Features</p>
//               <img id="arrow" src="/images/icon-arrow.svg" alt="" />
//             </div>
//             <div class="answer">
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
//                 tincidunt justo eget ultricies fringilla. Phasellus blandit
//                 ipsum quis quam ornare mattis.
//               </p>
//             </div>
//           </div>

//           <div class="faq">
//             <div class="question">
//               <p>Fabric Care</p>
//               <img id="arrow" src="/images/icon-arrow.svg" alt="" />
//             </div>
//             <div class="answer">
//               <p>
//                 Vivamus luctus eros aliquet convallis ultricies. Mauris augue
//                 massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
//                 luctus eros aliquet convallis ultricies. Mauris augue massa,
//                 ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
//                 aliquet convallis ultricies. Mauris augue massa, ultricies non
//                 ligula. Suspendisse imperdiet.
//               </p>
//             </div>
//           </div>
//         </section>
//         {
          
//           faqs.forEach(faq =>
//           {faq.addEventListener("click", () => {
//             faq.classList.toggle("active");
//           })}
//           )}
        
//       </div>
//     </>
//   );
// };

// export default MoreDetails;






import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Link } from "react-router-dom";
import "./style.css";

const data = {
  rows: [
    {
      title: "Features",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Fabric Care",
      content:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
  ],
};

export default function MoreDetails() {
  const [rows, setRowsOption] = useState(null);
  const [row, setRow] = useState(0);

  return (
    <div>

      <div className="faq-style-wrapper">
        <Faq data={data} getRowOptions={setRowsOption} />
      </div>
    </div>
  );
}
