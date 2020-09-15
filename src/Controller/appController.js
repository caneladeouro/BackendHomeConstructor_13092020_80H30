const Calculate = require('./calculate/calculete.js');

module.exports = {
    calculate (req, res) {
        var homeInformation = req.body;

        var homeInformationCalculate = { 
            floorSize: Calculate.calculeteSide(homeInformation.TileSize.width, homeInformation.TileSize.height),
            tileSize: Calculate.calculeteSide(homeInformation.FloorSize.width, homeInformation.FloorSize.height),
            wallSize: {
                one: Calculate.calculeteSide(homeInformation.sides.one.width, homeInformation.sides.one.height),
                two: Calculate.calculeteSide(homeInformation.sides.two.width, homeInformation.sides.two.height)
            },
            blockSize: Calculate.calculeteSide(homeInformation.blockSize.width, homeInformation.blockSize.height)
        };

        var wallSizeTotal = homeInformationCalculate.wallSize.one + homeInformationCalculate.wallSize.two;
        console.log(wallSizeTotal);
        console.log(homeInformationCalculate.blockSize);
        var homeInformationCompleted = {
            blockAmount: wallSizeTotal / homeInformationCalculate.blockSize,
            floorAmount: wallSizeTotal / homeInformationCalculate.floorSize,
            tileAmount: Calculate.calculeteSide(homeInformationCalculate.wallSize.one, homeInformationCalculate.wallSize.two) / homeInformationCalculate.tileSize,
            inkAmount: (wallSizeTotal + (homeInformation.sides.one.width * homeInformation.sides.two.width)) / 1000000 * homeInformation.inkAmountForSquare
        };

        res.json(homeInformationCompleted);
    }
}