# HTML, CSS, JavaScript 정리

## HTML 정리

<hr>
HTML(HyperText Markup Language)은 웹 페이지의 기초를 구성하는 언어로, 웹 페이지의 구조와 콘텐츠를 정의합니다. HTML은 다양한 태그들을 사용하여 텍스트, 이미지, 링크, 목록 등을 포함한 여러 요소들을 표시합니다. 각 태그는 레고 블록처럼 특정한 역할을 수행하며, 웹 페이지를 구성하는 데 필수적입니다.
<br />

### HTML 기본 구조

##### 기본 구조 이해하기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>나의 취미 웹 페이지</title>
  </head>
  <body>
    <div class="container">
      <div class="header"></div>
      <div class="title-section">
        <h1>나의 취미 웹 페이지</h1>
      </div>
      <!-- 콘텐츠 섹션들 -->
    </div>
    <script src="summary.js"></script>
  </body>
</html>
```

HTML 문서는 기본적으로 `<html>`, `<head>`, `<body>` 태그로 구성됩니다.

##### `<html>`: HTML 문서의 루트 요소.

##### `<head>`: 메타데이터, 스타일시트 링크, 스크립트 등을 포함.

##### `<body>`: 실제 웹 페이지에 표시되는 모든 콘텐츠를 포함.

<br />

#### 자주 사용되는 HTML 태그들

##### `<h1>`, `<h2>`: 제목을 정의.

##### `<p>`: 문단을 정의.

##### `<a>`: 하이퍼링크를 생성.

##### `<img>`: 이미지를 삽입.

##### `<ul>`, `<ol>`, `<li>`: 목록을 생성.

<br />

## CSS 정리

<hr>

CSS(Cascading Style Sheets)는 HTML 요소들의 스타일을 정의하는 언어로, 웹 페이지의 시각적인 표현을 제어합니다. CSS를 사용하여 텍스트의 색상, 크기, 레이아웃, 배경 등을 설정할 수 있습니다. 이는 웹 페이지를 더욱 아름답고 사용자 친화적으로 만드는 데 필수적입니다.
<br />

#### CSS 기본 구조와 문법

##### CSS 선택자: 스타일을 적용할 HTML 요소를 지정합니다.

> 예: .class, #id, element

##### CSS 속성 및 값: 스타일의 종류와 구체적인 설정 값을 지정합니다.

> 예: color: red;, font-size: 16px;

##### 선택자: 스타일을 적용할 HTML 요소를 지정.

##### 속성: 스타일의 종류를 정의.

##### 값: 스타일의 구체적인 설정 값을 지정.

<br />

#### CSS 적용 방법

##### 인라인 스타일

HTML 태그 내에 style 속성을 사용하여 직접 스타일을 적용.

##### 내부 스타일시트

`<style>` 태그를 사용하여 문서 내에 스타일을 정의.

##### 외부 스타일시트

별도의 CSS 파일을 생성하고 HTML 문서에 링크하여 스타일을 적용.

<br />

#### CSS 기본 스타일링

```css
/* 전체 페이지 스타일 */
body {
  display: flex;
  justify-content: center;
  background-color: #fff;
  font-family: "Nanum Gothic", sans-serif;
}

/* 컨테이너 스타일 */
.container {
  margin: 10px;
  max-width: 1100px;
  width: 1100px;
}

/* 타이틀 섹션 스타일 */
.title-section {
  text-align: center;
  padding: 20px;
  border: 5px solid black;
  margin-top: 20px;
}

.title-section h1 {
  font-size: 32px;
  font-weight: bold;
}
```

##### CSS 선택자: body, .container, .title-section 등을 사용하여 특정 요소에 스타일을 적용합니다.

##### 레이아웃: display: flex, justify-content: center 등을 사용하여 요소를 배치합니다.

##### 텍스트 스타일링: font-size, font-weight 등을 사용하여 텍스트를 스타일링합니다.

<br />

#### 특정 섹션의 짝수번째 목록 항목 스타일링

```css
/* 첫 번째 섹션의 짝수번째 목록 항목 스타일 */
.travel-journal ul li:nth-child(even) {
  background-color: #f0f0f0;
}

/* 두 번째 섹션의 짝수번째 목록 항목 스타일 */
.music-playlist ul li:nth-child(even) {
  background-color: #f0f0f0;
}
```

##### 가상 클래스 선택자: :nth-child(even)를 사용하여 짝수번째 요소에 스타일을 적용합니다.

##### 배경 색상: background-color를 사용하여 요소의 배경 색상을 설정합니다.

<br />

## JavaScript 정리

<hr>
JavaScript는 웹 페이지가 사용자의 행동에 반응하도록 만드는 프로그래밍 언어입니다. 이를 통해 웹 페이지는 동적으로 변화하고, 사용자와 상호 작용할 수 있습니다. JavaScript를 사용하여 버튼 클릭, 데이터 입력 등의 이벤트에 반응하는 기능을 구현할 수 있습니다.

<br />

#### JavaScript 기본 구조 및 문법

##### 변수와 상수 선언: 데이터를 저장하는 let과 const 키워드를 사용.

> 예: let age = 25;, const name = 'John';

##### 조건문: 특정 조건에 따라 다른 코드를 실행하는 if-else 문.

> 예: if (age >= 18) { console.log('Adult'); } else { console.log('Minor'); }

##### 반복문: 코드를 여러 번 실행하는 for 문.

> 예: for (let i = 0; i < 5; i++) { console.log(i); }

##### 함수: 특정 작업을 수행하는 코드 블록을 정의하고 재사용.

> 예: function greet(name) { return 'Hello ' + name; }

##### 이벤트 핸들링

JavaScript를 사용하여 웹 페이지에서 발생하는 다양한 이벤트(클릭, 마우스 이동, 키보드 입력 등)에 반응하는 기능을 구현합니다.
<br />

#### 토글 기능 구현

```javascript
/**
 * setupToggle 함수는 토글 버튼과 섹션 콘텐츠를 연결합니다.
 * @param {string} toggleButtonId - 토글 버튼의 HTML 요소 ID
 * @param {string} contentId - 표시하거나 숨길 섹션 콘텐츠의 ID
 */
function setupToggle(toggleButtonId, contentId) {
  const content = document.getElementById(contentId);
  const button = document.getElementById(toggleButtonId);
  const section = button.parentElement.parentElement;

  // 초기 상태 설정
  content.style.maxHeight = "0"; // 콘텐츠의 초기 최대 높이 설정
  button.innerHTML = "➕"; // 버튼 텍스트를 '+'로 설정
  section.style.overflow = "hidden"; // 섹션의 오버플로우 숨기기

  // 클릭 이벤트 리스너 추가
  button.addEventListener("click", function () {
    if (content.style.maxHeight === "0px" || content.style.maxHeight === "0") {
      content.style.maxHeight = content.scrollHeight + "px"; // 콘텐츠 표시
      button.innerHTML = "➖"; // 버튼 텍스트를 '-'로 변경
    } else {
      content.style.maxHeight = "0"; // 콘텐츠 숨기기
      button.innerHTML = "➕"; // 버튼 텍스트를 '+'로 변경
    }
  });

  // 초기 상태에서 실제 높이 적용
  requestAnimationFrame(() => {
    if (content.style.maxHeight !== "0px" && content.style.maxHeight !== "0") {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// 각 섹션에 대해 토글 기능 설정
setupToggle("toggleTravel", "travelJournal");
setupToggle("toggleMusic", "musicPlaylist");
setupToggle("toggleGame", "gameReview");
setupToggle("toggleFashion", "fashionContent");
setupToggle("toggleBooks", "booksContent");
setupToggle("toggleMovie", "movieContent");
```

##### 함수 정의: setupToggle 함수를 사용하여 토글 기능을 구현합니다.

##### 이벤트 리스너: addEventListener를 사용하여 버튼 클릭 시 콘텐츠를 표시하거나 숨깁니다.

##### 애니메이션 효과: max-height와 transition을 사용하여 부드러운 전환 효과를 적용합니다.

<br />

### script `<body>`태그 하단에 넣는 이유

#### script 태그의 위치

`<script src="summary.js"></script>`를 HTML 문서의 맨 마지막에, 특히 `</body>` 태그 바로 전에 넣는 이유는 웹 페이지의 로딩 속도와 실행 순서와 관련이 있습니다.

#### 로딩 속도

HTML의 모든 요소들이 먼저 로드되고 나서 스크립트가 로드되므로 사용자가 페이지의 기본 내용을 더 빠르게 볼 수 있습니다.

#### 실행 순서와 DOM 접근

스크립트가 실행될 때 모든 DOM 요소들이 이미 로드되어 있어서 오류가 발생하지 않습니다.

<br />

# 학습 포인트 요약

#### HTML 구조 이해

HTML 문서의 기본 구조와 주요 태그들의 역할을 학습합니다.

#### CSS 선택자와 스타일링

다양한 CSS 선택자와 속성을 사용하여 웹 페이지를 스타일링하는 방법을 익힙니다.

#### JavaScript로 동적 기능 구현

JavaScript를 사용하여 웹 페이지에 동적인 기능을 추가하고, 이벤트 핸들링과 애니메이션 효과를 구현하는 방법을 배웁니다.

<br />
<br />

# 결론

이번 시간을 통해 HTML, CSS, JavaScript의 기본 개념을 복습하고, 실습을 통해 이해를 깊게 할 수 있는 기회를 가졌습니다. 이러한 기초 지식은 웹 개발의 중요한 토대가 되며, 앞으로의 학습과 프로젝트에 큰 도움이 될 것 입니다. 그리고 이해가 되지 않더라도 직접 따라 쳐보고 본인의 화면에서 실행해보는 학습법이 더 중요하다고 생각합니다. 코드를 바꿔보고, 실행 결과를 확인하는 과정에서 많은 것을 배우게 될 것입니다. 이러한 경험이 쌓일수록 더욱 값진 경험이 될 것이라 확신합니다.

감사합니다, 그리고 다음 시간에 뵙겠습니다. 😃😃
