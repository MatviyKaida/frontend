const getWinningLineProps = (combo) => {
    if (combo.length < 2) return null;
    const [[r1, c1], [r2, c2]] = [combo[0], combo[combo.length - 1]];
  
    if (r1 === r2) return { direction: "row", index: r1 };
    if (c1 === c2) return { direction: "col", index: c1 };
    if (r1 === c1 && r2 === c2) return { direction: "main-diagonal" };
    if (r1 + c1 === 2 && r2 + c2 === 2) return { direction: "anti-diagonal" };
    return null;
  };
  
  export default getWinningLineProps;
  