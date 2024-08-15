const displayUniv = document.querySelector(".display-uni");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  displayUniv.innerHTML = "";
  getUniversity(input.value);
});

async function getUniversity(queryString) {
  try {
    let res = await fetch(
      `http://universities.hipolabs.com/search?country=${queryString}`
    );
    let data = await res.json();
    let liItem = document.createElement("ul");

    for (university of data) {
      liItem.insertAdjacentHTML(
        "beforeend",
        `<li>
                   <b>${university.name}</b>
                   <ul>
                        <li><a href="${university["web_pages"]}">${university["web_pages"]}</a></li>
                   </ul>
                   
               </li>`
      );
    }
    displayUniv.appendChild(liItem);
  } catch (err) {
    console.log(err);
  }
}
