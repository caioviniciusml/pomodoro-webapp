import Nav from './components/nav.tsx'
import Clock from './components/clock.tsx'


export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      <Clock initialMinutes={1} />
    </div>
  )
}
