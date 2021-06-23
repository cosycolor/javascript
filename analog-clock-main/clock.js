(function () {
  let canvas = document.querySelector("#canvas");
  let ctx = canvas.getContext("2d");
  let radius = canvas.height / 2;
  //원을 canvas의 중심으로 이동
  ctx.translate(radius, radius);
  radius = radius * 0.9;
  setInterval(drawClock, 1000);

  function drawClock() {
    let grad;

    //arc(x,y,radius,startAngle,endAngle)
    //ctx.translate으로 원의 중심을 옮겨 놨기 때문에 옮긴 곳이 기준이 되기 때문에 0,0으로 세팅
    //3시방향이 0이고 90도마다 0.5PI
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    //큰 호의 gradient
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    //호 둘레의 색상값
    grad.addColorStop(0, "#333");
    grad.addColorStop(0.5, "white");
    grad.addColorStop(1, "#333");

    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    //안쪽 원형 그리기
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = "#333";
    ctx.fill();

    drawNumbers();
  }

  function drawNumbers() {
    let ang;
    let num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num <= 12; num++) {
      //360도의 원에서 12개의 숫자를 배치해야하므로 숫자당 30도씩 할당. canavas는 360을 2PI로 계산하기 때문에 2PI/12 => PI/6이 도출
      //https://forest71.tistory.com/102?category=606376
      ang = num * (Math.PI / 6);
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
    drawTime();
  }
  function drawTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //hour
    hour = hour % 12;
    hour =
      (hour * Math.PI) / 6 +
      (minute * Math.PI) / (6 * 60) +
      (second * Math.PI) / (6 * 60 * 60);
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);

    //minute
    minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);

    //second
    second = (second * Math.PI) / 30;
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }

  function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }
})();
