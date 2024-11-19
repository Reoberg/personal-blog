import { useSpring, animated } from '@react-spring/web'
function Home (){
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )
    return(
      <div className="home">
        <animated.div style={props}>
        <section className="helloSection">
          <p>Hey! I am Onur</p>
        </section>
        </animated.div>
        <section className="cvSection">
          <p> Welcome to the Jungle.</p>
        </section>
      </div>
       
    )
}
export default Home;