// Code your solution in this file!
function distanceFromHqInBlocks (pu) {
    if (pu > 42) {
        return pu - 42;
    } else {
        return 42 - pu;
    }
}

function distanceFromHqInFeet (pu) {
    if (pu > 42) {
        return (pu - 42) * 264;
    } else {
        return (42 - pu) * 264;
    }
}

function distanceTravelledInFeet (pu, fin) {
    return Math.abs((pu - fin) * 264);
}

function calculatesFarePrice (pu, fin) {
    let distance = Math.abs((pu - fin) * 264);
    if (distance < 400) {
        return 0;
    } else if (distance < 2000) {
        return (distance - 400) * 0.02;
    } else if (distance < 2500) { 
        return 25;
    } else {
        return 'cannot travel that far';
    }
}