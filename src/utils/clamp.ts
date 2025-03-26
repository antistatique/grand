const clamp = (
  min: number,
  max: number,
  viewportWidth: number,
  minWidth = 380,
  maxWidth = 1460
) => {
  // Calculate the slope (vw value)
  const slope = (max - min) / (maxWidth - minWidth);

  // Calculate the px offset using the point-slope formula
  const pxOffset = min - slope * minWidth;

  const preferred = slope * viewportWidth + pxOffset;
  return Math.min(Math.max(min, preferred), max);
};

export default clamp;
