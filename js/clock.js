const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // padStart(문자의 길이,"")
    //원하는 문자의 길이가 아닌경우 다른걸로 채워넣음
    //문자의 길이가 최소 5는 되야하기때문에 길이가 5보다 작으면 앞에 0이라는 텍스트를 추가해라.
    //Date에서 가져온 시간들은 데이터타입이 숫자기 때문에 문자형으로 바꿔줘야 padStart를 사용할 수 있다. 
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);