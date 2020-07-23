let stc = prompt('回数入力してね')
let cnt = parseInt(stc)

for(let i=0; i < cnt; i++){
    let sentence = prompt('何歳ですか?')
    let age = parseInt(sentence)
    let pien

    if(age<20){
        pien = '未成年'
    }
    else if(age<65 && age >20){
        pien = '成人'
    }
    else{
        pien = '高齢者'
    }

    alert(age+'歳 '+pien)
}