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
