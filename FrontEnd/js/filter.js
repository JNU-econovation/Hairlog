
// 처음 => 최신순 정렬



// ID에 맞는 사진 불러오는 함수
function idToImg(arr, Id) {
  for(let i=0;i<arr.length;i++){
    if(arr[i].id === Id){
      return arr[i].img1;
    }
  }
}

//객체 전달받아서 화면에 띄우는 함수
function renderBox(exDatas) {
  const boxes = document.querySelector(".boxes");

  for(let i=0;i<exDatas.result.record.count;i++){      //for문 돌면서 box 만들고 안에 내용 채우기
    const temp = exDatas.result.record.rows[i];        //temp = 각 기록 하나를 가리킴

    const newBox = document.createElement('div');   // 사각형 만들고 html에 넣기
    newBox.classList.add("box");
    const boxID = exDatas.result.record.rows[i].id;        // box에 id값 줘서 나중에 구분

    newBox.id = boxID;    
    boxes.appendChild(newBox);

    
    const myURL = idToImg(exDatas.result.img.rows , boxID);
    newBox.style.backgroundImage = `url(${myURL})`;

    const newX = document.createElement('h1');     // x 표시 만들기
    newX.innerText = "✖";
    newBox.appendChild(newX);

    let rcDate = temp.recordDate.replaceAll('-','.').slice(2);
    const newDate = document.createElement('p');
    newDate.innerText = rcDate;
    newBox.appendChild(newDate);
    
    
  }
}

const latestURL = 'http://localhost:3000/api/main/latest';
const cutURL = 'http://localhost:3000/api/main/cut';
const permURL = 'http://localhost:3000/api/main/perm';
const dyeingURL = 'http://localhost:3000/api/main/dyeing';
const designerURL = 'http://localhost:3000/api/main/designer';

// 화면에 띄우는 함수
function goFetch(url){
  // 화면 초기화
  const reset = document.querySelector(".boxes");
  reset.innerHTML = '';


  let Datas;

  fetch(url) 
  .then((response) => response.text())
  .then((result) => { 
    Datas = JSON.parse(result);
    // console.log(result);
    console.log(Datas); 

    if(Datas.code === 200){
      renderBox(Datas);
    }
    
  });
} 

goFetch(latestURL);



const filter_date = document.querySelector(".f1");
const filter_cut = document.querySelector(".f2");
const filter_perm = document.querySelector(".f3");
const filter_dying = document.querySelector(".f4");
const filter_designer = document.querySelector(".f5");
const myFilters = [filter_date, filter_cut, filter_perm, filter_dying, filter_designer];

// 정렬 버튼 클릭 -> CSS 변화
function onclick(item) {
  item.classList.remove("NotSelected");
  item.classList.add("selected");

  const temp = myFilters.filter(myFilters => myFilters != item);
  for(let i=0;i<temp.length;i++){
    temp[i].classList.remove("selected");
    temp[i].classList.add("NotSelected");
  }

}

//최신순 
function selectF1() {
  onclick(filter_date); 
  
  // 최신순으로 화면 렌더링
  goFetch(latestURL);

}

//컷
function selectF2() {
  onclick(filter_cut);

  // 컷 화면 렌더링
  let Datas;

  goFetch(cutURL);

}

//펌
function selectF3() {
  onclick(filter_perm);

  // 펌 화면 렌더링
  goFetch(permURL);
}

//염색
function selectF4() {
  onclick(filter_dying);

  // 염색 화면 렌더링
  goFetch(dyeingURL);
}

//디자이너별
function selectF5() {
  onclick(filter_designer);

  // 디자이너 화면 렌더링
  goFetch(designerURL);

}

filter_date.addEventListener("click", selectF1);
filter_cut.addEventListener("click", selectF2);
filter_perm.addEventListener("click", selectF3);
filter_dying.addEventListener("click", selectF4);
filter_designer.addEventListener("click", selectF5);