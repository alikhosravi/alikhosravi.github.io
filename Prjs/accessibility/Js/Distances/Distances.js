var blockstyle = {
    color: "#ff0000",
    weight: 0.5,
    opacity: 0.8
};
var colors = [{0:'#f1eef6',1:'#d7b5d8',2:'#df65b0',3:'#dd1c77',4:'#980043'}, 
{0:'#f6eff7',1:'#bdc9e1',2:'#67a9cf',3:'#1c9099',4:'#016c59'},
{0:'#f1eef6',1:'#bdc9e1',2:'#74a9cf',3:'#2b8cbe',4:'#045a8d'},
{0:'#fef0d9',1:'#fdcc8a',2:'#fc8d59',3:'#e34a33',4:'#b30000'}]
Servises={'D2H':0, 'D2C':1,'D2L':2,'D2P':3}

function MaxMin(variable) {
    const result = [];
    for (let index = 0; index < blocks.length; index++) {
        result.push(blocks[index].properties[variable])
    };
    retn = []
    retn.push(Math.max.apply(Math, result))
    retn.push(Math.min.apply(Math, result))
    return retn
}

function DistancesTriger(service) {
    globalThis.Distances = L.geoJSON(blocks, {
    style: function(feature) {
        blockstyle.color=colors[Servises[service]][Math.round((feature.properties.D2H-MaxMin(service)[1]-1)/((MaxMin(service)[0]-MaxMin(service)[1])/5))];
        return blockstyle
    }
});
}