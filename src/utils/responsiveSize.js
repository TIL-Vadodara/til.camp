export default function(minSize, maxSize) {
  return `calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - 320px) / (1680 - 320)))`
}
