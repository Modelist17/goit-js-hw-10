import{c as f,e as u}from"./assets/izitoast-close-3ba23765.js";/* empty css                                  */import{i as m}from"./assets/vendor-77e16229.js";const p="/vanilla-app-template/assets/izitoast-ok-449d10c7.svg",i=document.querySelector(".form");i.addEventListener("submit",function(n){n.preventDefault();const o=document.querySelector('input[name="delay"]').value,t=[...document.querySelectorAll('input[name="state"]')].find(e=>e.checked);if(!o||!t){a("warning","Please fill the fields","warning-message","#FFA000",warningIcon);return}const s=parseInt(o);new Promise((e,c)=>{setTimeout(()=>{t.value==="fulfilled"?e(s):c(s)},s)}).then(e=>{a("OK",`Fulfilled promise in ${e}ms`,"success-message","#59A10D",p),i.reset()}).catch(e=>{a("Error",`Rejected promise in ${e}ms`,"warning-message","#ef4040",u),i.reset()})});function a(n,o,r,t,s){m.show({messageSize:"auto",title:n,message:o,class:r,position:"topCenter",titleColor:"#ffffff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#ffffff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:t,iconColor:"#ffffff",iconUrl:s,imageWidth:50,timeout:1e4,close:!1,buttons:[[`<button type="button" style="background-color: ${t}"><img src=${f}></button>`,function(l,e){l.hide({transitionOut:"fadeOut"},e)}]],closeOnEscape:!0,pauseOnHover:!1})}
//# sourceMappingURL=commonHelpers2.js.map
