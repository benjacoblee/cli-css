const harmonize = {
  parseHSL: function parseHSL(str) {
    var hsl, h, s, l;
    hsl = str.replace(/[^\d,]/g, "").split(","); // strip non digits ('%')
    h = Number(hsl[0]); // convert to number
    s = Number(hsl[1]);
    l = Number(hsl[2]);
    return [h, s, l]; // return parts
  },
  harmonize: function harmonize(color, start, end, interval) {
    const colors = [color];
    const [h, s, l] = this.parseHSL(color);

    for (let i = start; i <= end; i += interval) {
      const h1 = (h + i) % 360;
      const c1 = `hsl(${h1}, ${s}%, ${l}%)`;
      colors.push(c1);
    }
    return colors;
  }
};

module.exports = harmonize;
