//모든 article 요소들을 변수 items에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

//items의 갯수만큼 반복을 돌면 반복 
for(let el of items){    
    //for...of 문은 JavaScript에서 반복 가능한(iterable) 객체를 순회(iterate)하는 데 사용 
    //현재 반복돌고 있는 article요소에 mouseenter 이벤트 발생 시    
    el.addEventListener("mouseenter", e=>{
        //자식인 video요소 재생
        e.currentTarget.querySelector("video").play();  // .play();미디어 요소를 재생하는 것
    });

    //현재 반복돌고 있는 article요소에 mouseleave 이벤트 발생 시 
    el.addEventListener("mouseleave", e=>{
        //자식인 video요소 일시정지
        e.currentTarget.querySelector("video").pause(); // 미디어 요소를 일시 정지하는 메서드
    });

    //현재 반복돌고 있는 article요소에 click 이벤트 발생 시
    el.addEventListener("click", e=>{     
        //제목과 본문의 내용, 그리고 video요소의 src값을 변수에 저장  
        let tit = e.currentTarget.querySelector("h2").innerText;
        // innerText 속성은 DOM 요소의 텍스트 내용을 나타내는 속성입니다. 이 속성은 해당 요소의 자식 요소를 제외한 텍스트 내용만 반환합니다. 
        // HTML 마크업을 무시하고 텍스트 내용만을 반환
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
        // getAttribute() 메서드는 지정된 속성 값을 반환하는 메서드

        //aside 요소 안쪽의 콘텐츠에 위의 변수 내용을 적용
        aside.querySelector("h3").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);
        // setAttribute 메서드는 DOM 요소의 지정된 속성에 값을 설정하는 메서드

        //aside 요소 안쪽의 동영상을 재생하고 aside요소에 on을 붙여 팝업 패널 활성화
        aside.querySelector("video").play();
        aside.classList.add("on");
    });

    //닫기 버튼 클릭 시 
    close.addEventListener("click", ()=>{
        //aside 요소에 클래스 on을 제거해 비활성화 하고 안쪽의 영상을 재생중지
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    });
    aside.addEventListener("click", () => {
        //aside 요소에 클래스 on을 제거해 비활성화 하고 안쪽의 영상을 재생중지
        aside.classList.remove("on");
        aside.querySelector("video").pause();
      });
}        