const Home = () => {

    const handleClick =() => {
        console.log('Hello Ninjas')
    }
    const handleClickAgain = (name) =>{
        console.log('Hello ' + name)
    }
    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me ;)</button>
            <button onClick={
                () =>{handleClickAgain('mario')}
            }>Click me Again</button>
        </div>
     );
}
 
export default Home
