export const BorderBox = () => {
    return (
        <div>
            <svg width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="fillGradient" gradientUnits="userSpaceOnUse" x1="0" y1="100" x2="200" y2="100">
      <stop offset="50%" stop-color="blue" />
      <stop offset="100%" stop-color="red" />
    </linearGradient>
 
    <linearGradient id="strokeGradient" gradientUnits="userSpaceOnUse" x1="0" y1="100" x2="200" y2="100">
      <stop offset="50%" stop-color="yellow" />
      <stop offset="100%" stop-color="green" />
    </linearGradient>
  </defs>
 
  <polygon points="100,0 200,100 100,200 0,100" fill="url(#fillGradient)" stroke="url(#strokeGradient)" stroke-width="4"/>
</svg>
        </div>
    )
}