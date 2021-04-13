

const Avatar  = ({name, age, food}) => {
    // console.log(props)
    return(
      <div>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>My type of food is {food}</p>
      </div>
    )
}

export default Avatar