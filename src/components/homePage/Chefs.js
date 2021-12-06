import React from "react";

export default function Chefs({ params }){
  const { images } = params

  const renderImages = images.map(img => (
    <div className="col-lg-3 h-100 mx-auto text-center">
      <div className="mb-4 h-100"><img width="100%" height="100%" src={img.default} /></div>
      <div className="mb-4"><h3>Some Title</h3></div>
      <div className="mb-4">
        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p> 
      </div>
      <div>
        <button className="btn-secondary p-3 rounded-3">More Detail</button>
      </div>
    </div>
  ))

    return(
        <article>
            <section>
                <div className="text-center mx-auto">
                    <h1 className="fw-bold">People We Work With</h1>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum
                    </p>
                </div>
                <div style={{gridGap: "10px"}} className="container-fluid d-flex mx-auto flex-wrap">
                    {renderImages}
                </div>
            </section>
        </article>
    )
}