module.exports = function toReadable (number) {
    let str = String(number)


    let obj = {'0':'zero','1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','10':'ten',
    '11':'eleven','12':'twelve','13':'thirteen','14':'fourteen','15':"fifteen",'16':'sixteen','17':'seventeen','18':'eighteen',
    '19':'nineteen','20':'twenty','30':'thirty','40':'forty','50':'fifty','60':'sixty','70':'seventy','80':'eighty','90':'ninety'};
    if(str.length === 1){
        return obj[str[0]]
    }
    if(str.length === 2) {
        if (+(str) <= 20) {
            return obj[str]
        }
        if (+(str) >= 20) {
            str.split('');
            if(str[1] === '0'){
             let num = `${str[0]}0`
             return `${obj[num]}`
            }
            let first_num =`${str[0]}0`;
            console.log(`${obj[first_num]} ${obj[str[1]]}`);
            return `${obj[first_num]} ${obj[str[1]]}`
        }
    }
    if(str.length === 3){
        str.split('');
        let second__num =`${str[1]}0`;
        console.log(`${obj[str[0]]} hundred ${obj[second__num]} ${obj[str[2]]}`)
        if(str[1] === '1'){
         let two_numbers  =`${str[1]}${str[2]}`
          return   `${obj[str[0]]} hundred ${obj[two_numbers]}`
        }
        if(str[1] === '0' && str[2] === '0'){return `${obj[str[0]]} hundred`}
        if(str[1] === '0'){return  `${obj[str[0]]} hundred ${obj[str[2]]}`}
        if(str[2] === '0'){ return `${obj[str[0]]} hundred ${obj[second__num]}`}
        return `${obj[str[0]]} hundred ${obj[second__num]} ${obj[str[2]]}`
    }
}
/*toReadable(321)*/
