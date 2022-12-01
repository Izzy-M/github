import {useState} from 'react';
import './../css/index.css';
import logo from './../css/git1.png';
function Index() {
  const [useState,setuser]=['',''];

  return (
    <div className='bd'>
    <div className="home">
      <div className="row justify-content-center mt-2" >
      <p><div className='row justify-content-center'><div className='card rounded-circle' style={{height:'50px',width:'50px',padding:'0px',marginTop:'15px',backgroundImage:`url(${logo})`,backgroundSize:'cover',objectPosition:'fit'}}></div></div></p></div><div>
      <p style={{textAlign:'center',fontFamily:'helvetica',fontSize:'16px',marginTop:'10px'}}><span><h5>Sign In to Github</h5></span></p>
      </div>
      <div className="card cover">
        <form onSubmit={()=>{}}>
        <p>Username or email address<br/>
        <input className='inp' type='text' value={useState}/></p>
        <p><span style={{float:'left'}}>Password</span> <span style={{float:'right'}}><a href='' style={{textDecoration:'none',color:'#58a6ff',cursor:'pointer'}}>Forgot password</a></span><br/>
        <input className='inp' type="password" value={useState}/>
        </p>
        <p><div className="btn1" onClick={()=>{}}>Sign In</div></p>
        </form>
      </div>
      <div className='card d-flex row text-center' style={{minHeight:'60px',minWidth:'300px',margin:'0px auto',maxWidth:'350px',marginTop:'40px',background:'#000',lineHeight:'30px',padding:'10px'}}><div>New to Github? <a href='' style={{textDecoration:'none',color:'#58a6ff',cursor:'pointer'}}>Create Account</a></div></div>
    </div>
    </div>
  );
}

export default Index;
