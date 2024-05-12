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
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    );

};

export default Buy;