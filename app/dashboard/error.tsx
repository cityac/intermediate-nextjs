'use client'
// must be client component will be caught at
// runtime with error boundries
const HomeError = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-2xl">{error.message}</h1>
      <h2>Something bad happened :( </h2>
      <button onClick={() => reset()}>Try again </button>
    </div>
  )
}

export default HomeError
