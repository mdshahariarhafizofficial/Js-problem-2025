function findPatri(patriList){
    let temp = [];
    for( let i = 0; i < patriList.length; i++ ){
        let patri = patriList[i];
        if (patri.includes("h")) {
            temp.push(patri)
        }
    
    }
    return temp;
}

const patriList_1 = ["jamila", "sokina", "halima", "hena", "karishma", "hasina"];
const patriList_2 = ["jhamila", "sokina", "halima", "hena", "karishma", "Seikh hasina"];

const selectedPatriList1 = findPatri(patriList_1);
console.log(selectedPatriList1);
const selectedPatriList2 = findPatri(patriList_2);
console.log(selectedPatriList2);
