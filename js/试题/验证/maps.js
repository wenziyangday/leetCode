const polygon = [{"points":[{"longitude":120.71258794805857,"latitude":31.681400298201048},{"longitude":120.73959035809399,"latitude":31.65859664431454},{"longitude":120.78694036199916,"latitude":31.66760300159473},{"longitude":120.76659673781117,"latitude":31.673711090823137},{"longitude":120.71258794805857,"latitude":31.681400298201048}],"name":"三环东北角","strokeWidth":0,"strokeColor":"transparent","fillColor":"rgba(69, 55, 237, 0.3)"},{"points":[{"longitude":120.75527380246793,"latitude":31.681723100397882},{"longitude":120.75501409071114,"latitude":31.67622923345573},{"longitude":120.78065157249478,"latitude":31.677965833802876},{"longitude":120.77423293051143,"latitude":31.682543994163527},{"longitude":120.75527380246793,"latitude":31.681723100397882}],"name":"海虞北路右侧","strokeWidth":0,"strokeColor":"transparent","fillColor":"rgba(177, 144, 213, 0.3)"},{"points":[{"longitude":120.74026588387036,"latitude":31.657847230657566},{"longitude":120.744712297323,"latitude":31.64284235075702},{"longitude":120.7953207116228,"latitude":31.647777037999337},{"longitude":120.78786872853311,"latitude":31.666462785115616},{"longitude":120.74026588387036,"latitude":31.657847230657566}],"name":"常熟111","strokeWidth":0,"strokeColor":"transparent","fillColor":"rgba(210, 80, 81, 0.3)"}];

polygon.map(_x => {

  const {points, strokeWidth, strokeColor, fillColor, name} = _x;
  const contours = points.map(_y => [_y.longitude, _y.latitude])
  return  {
    contours: contours,
    name: name
  }

})
