'use strict'
// 1行目に記載している 'use strict' は削除しないでください


//例
// function alertHello() {
//   window.alert("アラート");
// }
// const btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", alertHello);

//マップピンリスト
const pinList = ["pinKanto", "pinTokai", "pinChubu"];


//画面スクロール時ヘッダー非表示昨日
const header = document.querySelector('header');
let prevY = window.scrollY; // 前回のスクロール位置を初期化

window.addEventListener('scroll', function () {
  const currentY = window.scrollY; // 現在のスクロール位置を取得
  if (currentY < prevY) { // 上にスクロールしている場合
    header.classList.remove('hidden'); // hiddenクラスを削除して表示する
  } else { // 下にスクロールしている場合
    if (currentY > 0) { //Safariなどのバウンススクロール対策
      header.classList.add('hidden'); // hiddenクラスを追加して非表示にする
    }
  }
  prevY = currentY; // 前回のスクロール位置を更新
});

// ハンバーガーメニュー機能
{
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });
}




//マウスホバーイベント
const pinTarget = [document.getElementById("pinKanto"), document.getElementById("pinTokai"), document.getElementById("pinChubu")];
const popupTarget = [document.getElementById("toolTipKanto"), document.getElementById("toolTipTokai"), document.getElementById("toolTipChubu")];

// function mouseHover() {
//   for (const popup of popupTarget) {
//     popup.style.display = 'block';
//   }
// }

// function mouseleave() {
//   for (const popup of popupTarget) {
//     popup.style.display = 'none';
//   }
// }

function mouseHover0() {
  popupTarget[0].style.display = 'block';
}

function mouseleave0() {
  popupTarget[0].style.display = 'none';
}

function mouseHover1() {
  popupTarget[1].style.display = 'block';
}

function mouseleave1() {
  popupTarget[1].style.display = 'none';
}

function mouseHover2() {
  popupTarget[2].style.display = 'block';
}

function mouseleave2() {
  popupTarget[2].style.display = 'none';
}

pinTarget[0].addEventListener('mouseover', mouseHover0);
pinTarget[1].addEventListener('mouseover', mouseHover1);
pinTarget[2].addEventListener('mouseover', mouseHover2);

pinTarget[0].addEventListener('mouseleave', mouseleave0);
pinTarget[1].addEventListener('mouseleave', mouseleave1);
pinTarget[2].addEventListener('mouseleave', mouseleave2);

// // ボタンにhoverした時
// for (const pin of pinTarget) {
//   pin.addEventListener('mouseover', mouseHover);
// }
// // ボタンから離れた時
// for (const pin of pinTarget) {
//   pin.addEventListener('mouseleave', mouseleave);
// }


//行き先を決めるボタン押下
function randomGo() {
  console.log("押した");
  const number = Math.floor(Math.random() * 2);
  if (number) {
    return modalOpen();
  } else {
    return modalOpenTokai();
  }
}
const btn1 = document.getElementById("btn1");
btn1.addEventListener('click', randomGo);

const modal = document.querySelector('.js-modal'),
  close = document.querySelector('.js-modal-close');
const tokaiModal = document.querySelector('#tokai-modal1'),
  tokaiClose = document.querySelector('#tokai-modal3');

//中部モーダル
//「開くボタン」をクリックしてモーダルを開く
function modalOpen() {
  modal.classList.add('is-active');
}
pinTarget[2].addEventListener('click', modalOpen);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
  modal.classList.remove('is-active');
}
close.addEventListener('click', modalClose);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut(e) {
  if (e.target == modal) {
    modal.classList.remove('is-active');
  }
}
addEventListener('click', modalOut);

//東海モーダル
//「開くボタン」をクリックしてモーダルを開く
function modalOpenTokai() {
  tokaiModal.classList.add('is-active');
}
pinTarget[1].addEventListener('click', modalOpenTokai);

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalCloseTokai() {
  tokaiModal.classList.remove('is-active');
}
tokaiClose.addEventListener('click', modalCloseTokai);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOutTokai(e) {
  if (e.target == tokaiModal) {
    tokaiModal.classList.remove('is-active');
  }
}
addEventListener('click', modalOutTokai);