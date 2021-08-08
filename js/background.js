const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/*
지금까지는 HTML에서 불러와서 수정을 하였지만,
JavaScrip에서 HTML로 추가한적은 없었다.
✅ 이번에는 추가해보자.
*/

//Our goal is to make image in HTML. By JavaScript
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("background");
//✨ we made an <img src="img/${chosenImage}"> tag!

//Now, let's put this inside of the body.
document.body.appendChild(bgImage);

//✅ Node.appendChild ✨
// 한 노드의 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙힌다.
// 만약 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 appendChild()는 노드를 현재 위치에서 새로운 위치로 이동 시킨다.

//✅ insertBefore() ✨
// 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입한다??
//Ex) const h2 = document.querySelector("#clock");
// document.body.insertBefore(bgImage, h2);
// h2요소, 즉 id="clock" 을 가지는 tag 앞에 추가된다.