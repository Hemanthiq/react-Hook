import React from 'react'

function Ex6 (){
    const fuser = userRef()
    const fpass  = userRef()


    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            user:fuser.current.value,
            pass:fpass.current.value
        };
        console.log('new user =', data)
    }
return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <h3 className='display-3 text-success'>useRef</h3>
            </div>
        </div>
        <div className="row">
            <div className="colmd-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete='off'>
                            <div className="form-group mt-2">
                                <label htmlFor='user'>UserName</label>
                                <input type="text" name="user" id='user' ref={fuser} className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor='pass'>password</label>
                                <input type="password" name="pass" id='pass' ref={pass} className='form-control' required />
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" value="Login" className="btn btn-success" required />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
)          
}
export default Ex6