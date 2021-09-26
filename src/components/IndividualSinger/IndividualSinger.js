import React from 'react';



//individual function
const IndividualSinger = (props) => {
    // destructuring object
    const { name, img } = props.individualSinger
    return (
        <div>

            <div className="my-4">
                <div className="p-0 alert alert-dismissible fade show" role="alert">
                    <div className="card carditem__bg--color">
                        <div className="row">

                            {/* img part */}
                            <div className="col-lg-4 col-md-12 col-4">
                                <img src={img} className="w-100" alt="" />
                            </div>

                            {/* text part */}
                            <div className="col-lg-5 col-md-12 col-6">
                                <h5>{name}</h5>
                            </div>

                            {/* close part */}
                            <div className="col-lg-2 col-md-12 col-2">
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};



export default IndividualSinger;