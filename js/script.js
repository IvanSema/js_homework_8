// 1. Создать страницу, которая выводит нумерованный список песен:

// let playList = [

//     {
    
//      author: "LED ZEPPELIN",
    
//      song:"STAIRWAY TO HEAVEN"
    
//     },
    
//     {
    
//      author: "QUEEN",
    
//      song:"BOHEMIAN RHAPSODY"
    
//     },
    
//     {
    
//      author: "LYNYRD SKYNYRD",
    
//      song:"FREE BIRD"
    
//     },
    
//     {
    
//      author: "DEEP PURPLE",
    
//      song:"SMOKE ON THE WATER"
    
//     },
    
//     {
    
//      author: "JIMI HENDRIX",
    
//      song:"ALL ALONG THE WATCHTOWER"
    
//     },
    
//     {
    
//      author: "AC/DC",
    
//      song:"BACK IN BLACK"
    
//     },
    
//     {
    
//      author: "QUEEN",
    
//      song:"WE WILL ROCK YOU"
    
//     },
    
//     {
    
//      author: "METALLICA",
    
//      song:"ENTER SANDMAN"
    
//     }
    
//     ];

// let res = '';

// res += '<ol>';

// for (let i of playList){
//     res += `<li>${i.author} - ${i.song}</li>`
// }
// res += '</ol>'

// document.write(res);

// // 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

// function checkModal(){
//     console.log(document.getElementById('modal').style.display);
//     if(document.getElementById('modal').style.display == 'block'){
//         document.getElementById('openBtn').style.display = 'block';
//         document.getElementById('modal').style.display = 'none';
//     }else{
//         document.getElementById('modal').style.display = 'block';
//         document.getElementById('openBtn').style.display = 'none';
//     }
// }


// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

function changeLight(){
    let temp = document.getElementsByClassName('light');
    let i = 0
    while(i < temp.length){


        if (temp[i].classList.contains('active')){
            temp[i].classList.toggle('active');

            if((i+1) >= temp.length){
                i = 0;
                temp[i].classList.toggle('active');
                break;
            }else{
                temp[i+1].classList.toggle('active');
                break;
            }
        }
        console.log(i);

        i++
    }
   
}