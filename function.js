const getRandomRGB = () => {
  const r = Math.floor(Math.random() * Math.floor(255));
  const g = Math.floor(Math.random() * Math.floor(255));
  const b = Math.floor(Math.random() * Math.floor(255));
  return `rgb(${r},${g},${b})`;
};

const colorPicker = document.getElementById("colorPicker");

for (let i = 0; i < 10000; ++i) {
  const btn = document.createElement("button");
  const rgb = getRandomRGB();
  btn.id = rgb;
  btn.textContent = rgb;
  btn.style.backgroundColor = rgb;
  colorPicker.appendChild(btn);
}

const sm = (e) => {
  console.log("e -> ", e.id);
  document.getElementById("answerBox").style.backgroundColor = "" + e.id;
};
let elem = document.getElementsByTagName("button");

for (let i = 0; i < elem.length; i++) {
  elem[i].setAttribute("onclick", "sm(this)");
}

/*
 * Do not modify this class.
 * Custom Dialog Element.
 */
class MyDlg extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const div = document.createElement("div");
    div.id = "container";
    div.style.position = "relative";
    div.style.width = div.style.height = "100px";
    div.style.border = "1px solid black";
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "0";
    closeBtn.addEventListener("click", () => {
        console.log('old');
      if (
        this.dispatchEvent(new CustomEvent("close-dlg", { cancelable: true }))
      ) {
        div.style.display = "none";
      }
    });
    div.appendChild(closeBtn);
    this.appendChild(div);
  }
}
// Define the new element
customElements.define("my-dlg", MyDlg);

/* Quiz: Write code to prevent dialog to close when click close button */
const dlg = document.getElementById("dlg");

const closeBtn = document.createElement("button");
setTimeout(() => {
  console.log("success");
  closeBtn.removeAttribute("click");
  closeBtn.addEventListener("click", () => {
    alert("5555555555");
  });
}, 1000);
console.log(dlg);
/****/
