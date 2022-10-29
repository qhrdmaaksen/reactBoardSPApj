# reactSPA-board-PJ
## 게시판 만들기

```js
project name : reactSPA-board-PJ
1. 네비게이션 출력
2. 게시판의 모든 글 목록 출력
3. 게시글 상세보기 기능
4. 게시글 오름차순 내림차순 정렬 기능
5. 새 게시글 추가 기능
6. 댓글 추가 기능
7. 댓글 목록 출력
8. 요청 응답 Firebase 연동
9. 로딩 스피너
10.파이어 베이스 배포

React CSS Html react-router-dom

Components
  UI 폴더 : 유저 인터페이스 관련
    -Card.js : card 틀
    -LoadingSpinner.js : 로딩 시 빙글빙글 돌아가는 로딩표시
  layout 폴더 
    Layout.js : main 상단 navigation 및 main layout
    MainNavigation.js : 네비게이션
  quotes 폴더 : 게시판 관련
     HighlightedQuote.js : 게시글 상세보기 figure 활용 틀 맞춤
     NoQuotesFound.js : 게시글 찾을 수 없을때 활용
     QuoteForm.js : 게시글 form 관련
     QuoteItem.js : 게시글 레이아웃 관련
     QuoteList.js : 게시글 목록 관련
  comments 폴더 : 댓글 관련
    CommentItem.js : 댓글 출력 관련
    Comments.js : 댓글 데이터, 요청, 상태 관리 관련
    CommentsList.js : 댓글 목록 출력 관련
    NewCommentForm.js : 새 게시글의 요청,에러,상태 관리 관련
  pages 폴더 : 각 페이지 출력
    AllQuotes.js : 모든 게시글 출력, 요청, 상태, 게시글 데이터, 에러 관련
    QuoteDetail.js : 게시글 상세보기 출력 요청,상태,데이터,에러 관련
    NewQuote.js : 새 게시글 관련 요청, 상태관리 관련
    NotFound.js : 페이지 찾을 수 없을때 관련
  hooks 폴더
    use-http.js : 데이터 요청 및 응답 관련
  lib 폴더
    api.js : 모든게시글,게시글,게시글추가,모든댓글 관련 요청 및 응답 관련

```

게시글 목록
![reactBoardList](https://user-images.githubusercontent.com/75942405/198824268-939226d6-c451-4418-9706-533b24453fa4.png)

게시글 상세보기
![reactBoardDetail](https://user-images.githubusercontent.com/75942405/198824278-846f5b70-10a8-465f-8cf6-83fa7625c009.png)

새 게시글 추가
![reactBoardAdd](https://user-images.githubusercontent.com/75942405/198824294-a542b837-2db2-4b62-8705-489bede9ce9c.png)

use Prompt react-router-dom
![reactBoardLeaveInput](https://user-images.githubusercontent.com/75942405/198824305-06e14755-23b4-482d-8822-43566518748f.png)

게시글 등록
![reactBoardFireBaseWrite](https://user-images.githubusercontent.com/75942405/198824322-75fb938f-a65c-49e4-8868-daf65af878e6.png)

FireBase 등록
![reactBoardFireBaseWrite02](https://user-images.githubusercontent.com/75942405/198824328-8f4a8368-f5fc-49ca-a6eb-2378cf98e5e2.png)

게시글 목록 불러오기
![reactBoardLoadToData](https://user-images.githubusercontent.com/75942405/198824340-660603f9-0680-4fe1-990e-9ac5f63d2e4c.png)

게시글 존재 하지 않을 시
![reactBoardListNotFound](https://user-images.githubusercontent.com/75942405/198824355-b0c8a7e2-304b-4f77-ad99-decaae1d3c2a.png)

댓글 작성시
![reactBoardComments](https://user-images.githubusercontent.com/75942405/198824374-79447c45-1f0e-46ad-a189-1f70e911fdd3.png)

댓글 FireBase 등록
![reactBoardFireBaseCommnet](https://user-images.githubusercontent.com/75942405/198824422-4424628e-386f-4a9d-9b62-112c08730993.png)

댓글 목록
![reactBoardCommentsList](https://user-images.githubusercontent.com/75942405/198824431-843533bc-4dad-4060-80e9-9289c446fee7.png)

로딩시 스피너
![reactBoardLoadingSpinner](https://user-images.githubusercontent.com/75942405/198824445-fa07fe16-adb8-4b60-88fe-eff0799b8619.png)

Firebase deploy
![reactBoardDeploy](https://user-images.githubusercontent.com/75942405/198824454-88fc9d90-84d2-47f0-ab44-d4274f7fc264.png)
