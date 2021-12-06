import React from 'react'

export default function Kitchens({ params }){
  const { images } = params
  const renderImages = images.map(img => (
    <div className="col-lg-3 text-center">
      <img width="100%" height="100%" src={img.default} />
      <div className="mt-1 fst-italic kitchenType">
        <h2>Kitchen Name</h2>
      </div>
    </div>
  ))

    return(
      <article>
          <section className="p-2 mb-3 text-center mx-auto">
            <div className="col-4 mx-auto mb-4 kitchenTitle">
              <h1 className="display-5">Our Kitchens</h1>
              <p><i className="text-dark">Some text some text some text</i></p>
            </div>
          </section>
          <section className="kitchen h-100">
              <div style={{gridGap: '50px'}} className="d-flex flex-row justify-content-center flex-wrap">
                  {renderImages}
              </div>
          </section>
      </article>
    )
}