
function proposalSent(patroData, patriData){
    if (patroData instanceof Object && patriData instanceof Object && !Array.isArray(patroData) && !Array.isArray(patriData) && Object.keys(patroData).length !== 0 && Object.keys(patriData).length !== 0) {
        if (patroData.district === patriData.district) {
            return "Proposal Send"
        }
        else{
            return "Noooooo!"
        }
    }
    else{
        return "Invalid Input"
    }

}


const patroBioData = {
    name: "Hero Alom",
    fatherName: "Joga Alom",
    age: 32,
    district: "Barishal",
}
const patriBioData = {
    name: "Moyda Alom",
    fatherName: "Ata Alom",
    age: 22,
    district: "Barishal",
}

const result = proposalSent(patroBioData, patriBioData);
console.log(result);

