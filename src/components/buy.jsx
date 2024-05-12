import {Link} from 'react-router-dom';

const Buy = () =>{
    return (
      <div className="row mt-3">
        <div className="col-4"></div>
        <div className="col-4">
          <form>
            <div class="mb-3 mt-3">
              <label class="form-label">Name</label>
              <input class="form-control" />
            </div>
            <div class="mb-3 mt-3">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <Link to={{pathname: '/confirm'}} ><button class="btn btn-primary">Pay</button></Link>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    );

};

export default Buy;