import './../css/index.css';
import logo from './../css/git.png';
function Index() {
  return (
    <div className="home card">
      <div className="row justify-content-center" >
      <div style={{height:'50px',width:'50px'}}><img className='avt' src={logo}/></div>
      <p style={{textAlign:'center',fontFamily:'helvetica',fontSize:'18px'}}><span><h1>Sign In to Github</h1></span></p>
      </div>

      <div className="card cover"></div>
     
    </div>
  );
}

export default Index;
