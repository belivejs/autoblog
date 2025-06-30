function addClickedClass(element) {
  if(element.classList.contains('clicked')) {
    element.classList.remove('clicked');
  } else {
    element.classList.add('clicked');
  }
  
}

fetch("./json/account.json")
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .then(json => {
        const data = json; 

        const account_list = document.getElementsByClassName('account__list');
        let listItems = "";
        for (const email in data) {
          if (data.hasOwnProperty(email)) {
              const info = data[email]; // 키를 이용해 값(정보 객체)에 접근
              listItems += 
              `<li class="account_list_item">
                <details>
                    <summary class="account__info__account" onclick="addClickedClass(this)">${email}</summary>
                    <dl class="account__info__list">
                        <dt class="account__info__list__heading">계정 비밀번호:</dt>
                        <dd class="account__info__list__description">${info.password}</dd>
                        <dt class="account__info__list__heading">계정 닉네임:</dt>
                        <dd class="account__info__list__description">${info.nickname}</dd>
                    </dl>
                </details>
              </li>`;
          }
        } 
        account_list[0].innerHTML = listItems;
    })
    .catch(error => {
        console.error('JSON 파일을 불러오거나 파싱하는 중 오류가 발생했습니다:', error);
    });


