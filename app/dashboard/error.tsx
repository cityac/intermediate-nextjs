'use client'
<<<<<<< HEAD
// must be client component will be caught at
// runtime with error boundries
const HomeError = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-2xl">{error.message}</h1>
      <h2>Something bad happened :( </h2>
      <button onClick={() => reset()}>Try again </button>
=======

const HomeError = ({ error, reset }) => {
  return (
    <div>
      <h2>Something bad happened :( </h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
>>>>>>> 20439d3 (start)
    </div>
  )
}

export default HomeError
