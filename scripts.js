// scripts.js
document.getElementById('coreForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nodeLevelData = [
        { level: 1, nodesUsed: 0 },
        { level: 2, nodesUsed: 2 },
        { level: 3, nodesUsed: 3 },
        { level: 4, nodesUsed: 5 },
        { level: 5, nodesUsed: 7 },
        { level: 6, nodesUsed: 9 },
        { level: 7, nodesUsed: 12 },
        { level: 8, nodesUsed: 14 },
        { level: 9, nodesUsed: 18 },
        { level: 10, nodesUsed: 21 },
        { level: 11, nodesUsed: 25 },
        { level: 12, nodesUsed: 29 },
        { level: 13, nodesUsed: 33 },
        { level: 14, nodesUsed: 38 },
        { level: 15, nodesUsed: 43 },
        { level: 16, nodesUsed: 48 },
        { level: 17, nodesUsed: 54 },
        { level: 18, nodesUsed: 60 },
        { level: 19, nodesUsed: 66 },
        { level: 20, nodesUsed: 73 },
        { level: 21, nodesUsed: 79 },
        { level: 22, nodesUsed: 87 },
        { level: 23, nodesUsed: 94 },
        { level: 24, nodesUsed: 102 },
        { level: 25, nodesUsed: 110 }
    ];

    const startLevel = parseInt(document.getElementById('startLevel').value);
    const endLevel = parseInt(document.getElementById('endLevel').value);

    const startNodesUsed = nodeLevelData.find(data => data.level === startLevel).nodesUsed;
    const endNodesUsed = nodeLevelData.find(data => data.level === endLevel).nodesUsed;

    const nodesNeeded = endNodesUsed - startNodesUsed;

    document.getElementById('nodesNeeded').innerText = nodesNeeded;
});
