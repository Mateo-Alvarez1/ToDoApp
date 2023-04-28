import { ClipLoader } from 'react-spinners'

export const CheckingAuth = () => {
  return (
    <div className='login'>
        <div className='login_container' style={{ backgroundColor:'transparent' , boxShadow:' none' , display:'grid' , placeContent:'center' , padding:'0'}} >
            <ClipLoader color={'red'}/>
        </div>
    </div>
  )
}
