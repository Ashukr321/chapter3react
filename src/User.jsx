import './index.css'
//  user data 
const  userData = {
  firstName:"Ashutosh kumar",
  lastName:"singh",
  title:"Student"
}

function User (){
  return(
    <div id='user'>
      <h2>
        TODO : {userData.firstName} {userData.lastName}
      </h2>
    </div>
  )
}
export default User;