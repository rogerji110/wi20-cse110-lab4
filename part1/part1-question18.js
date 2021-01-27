let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const property in statistics) {
    if (property[0] === "R" || statistics[property] % 2 == 1) {
        console.log(statistics[property]);
    }
}