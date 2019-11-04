const requirementsObj = require('./requirements')

let formatRequirements = (inputData) => {
    const requirementsArray = Array.from(inputData)
    const regEx = ','
    const requirements = requirementsArray.join().toLocaleLowerCase().trim().split(regEx)
    return requirements
}

const includesRequirement = (inputArray, data) => {
    if(Array.isArray(inputArray) && typeof data === 'string'){
        const isIncluded = inputArray.includes(data)
        if (isIncluded){
            return true
        } else {
            return false

        }
    } else {
        return `${inputArray} is not an array`
    }
}

const formatCanOrCannotWork = (data) => {
    if(Array.isArray(data)){
        const result = data.sort().join().trim().toUpperCase()
        return result
    } else {
        return `${data} is not an Array`
    }
}

function calculateCompany () {
    const canWorkArray = []
    const cannotWorkArray = []
    const requirements = formatRequirements(arguments)

    if ( includesRequirement(requirements, requirementsObj.Company_A.house) || includesRequirement(requirements, requirementsObj.Company_A.apartment) && includesRequirement(requirements, requirementsObj.Company_A.insurance)){
        canWorkArray.push(requirementsObj.Company_A.company)
    } else {
        cannotWorkArray.push(requirementsObj.Company_A.company)
    }

    if ( includesRequirement(requirements, requirementsObj.Company_B.car.door.five) || includesRequirement(requirements, requirementsObj.Company_B.car.door.four) && includesRequirement(requirements, requirementsObj.Company_B.car.insurance) && includesRequirement(requirements, requirementsObj.Company_B.drivers.license)){
        canWorkArray.push(requirementsObj.Company_B.company)
    } else {
        cannotWorkArray.push(requirementsObj.Company_B.company)
    }

    if ( includesRequirement(requirements, requirementsObj.Company_C.security) && includesRequirement(requirements, requirementsObj.Company_C.permit)){
        canWorkArray.push(requirementsObj.Company_C.company)
    } else {
        cannotWorkArray.push(requirementsObj.Company_C.company)
    }

    if ( includesRequirement(requirements, requirementsObj.Company_D.apartment) || includesRequirement(requirements, requirementsObj.Company_D.flat) || includesRequirement(requirements, requirementsObj.Company_D.house)){
        canWorkArray.push(requirementsObj.Company_D.company)
    } else {
        cannotWorkArray.push(requirementsObj.Company_D.company)
    }

    if ( includesRequirement(requirements, requirementsObj.Company_E.drivers.license) && includesRequirement(requirements, requirementsObj.Company_E.car.door.five) || includesRequirement(requirements, requirementsObj.Company_E.car.door.four) || includesRequirement(requirements, requirementsObj.Company_E.car.door.three) || includesRequirement(requirements, requirementsObj.Company_E.car.door.two)){
        canWorkArray.push(requirementsObj.Company_E.company)
    } else {
        cannotWorkArray.push(requirementsObj.Company_E.company)
    }

    if ( includesRequirement(requirements, requirementsObj.Company_F.scooter) || includesRequirement(requirements, requirementsObj.Company_F.bike) || includesRequirement(requirements, requirementsObj.Company_F.motorcycle) && includesRequirement(requirements, requirementsObj.Company_F.drivers.license) && includesRequirement(requirements, requirementsObj.Company_F.insurance)){
        canWorkArray.push(requirementsObj.Company_F.company)
    } else {
        cannotWorkArray.push(requirementsObj.Company_F.company)
    }

    if ( includesRequirement(requirements, requirementsObj.Company_G.massage) && includesRequirement(requirements, requirementsObj.Company_G.insurance)){
        canWorkArray.push(requirementsObj.Company_G.company)
    } else {
        cannotWorkArray.push(requirementsObj.Company_G.company)
    }

    if ( includesRequirement(requirements, requirementsObj.Company_H.storage) || includesRequirement(requirements, requirementsObj.Company_H.garage)){
        canWorkArray.push(requirementsObj.Company_H.company)
    } else {
        cannotWorkArray.push(requirementsObj.Company_H.company)
    }

    if ( includesRequirement(requirements, requirementsObj.Company_K.account)){
        canWorkArray.push(requirementsObj.Company_K.company)
    } else {
        cannotWorkArray.push(requirementsObj.Company_K.company)
    }

    if ( includesRequirement(requirements, '')){
        canWorkArray.push(requirementsObj.Company_J.company)
    } else {
        cannotWorkArray.push(requirementsObj.Company_J.company)
    }


    const cannotWork = formatCanOrCannotWork(cannotWorkArray)
    const canWork = formatCanOrCannotWork(canWorkArray)

    return `You can work in ${canWork} BUT cannot work in ${cannotWork}`
}




console.log(calculateCompany('bike, driver license'))