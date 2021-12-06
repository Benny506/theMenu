import React from "react";

export default function Header({ params }){
    const { img } = params
    return(
        <article className="header">
            <section className="d-flex flex-column justify-content-around h-75 w-100">
                <div className="px-5 align-items-center">
                    <h1 style={{color: 'tomato'}} className="text-end homeHeader display-1 fw-bold">The Menu</h1>
                    <p style={{fontSize: 25}} className="text-end fw-bold"><i className="homeHeader">Some Slogan</i></p>
                </div>
                <div style={{gridGap: '10px'}} className="row container">
                    <div className="rounded-3 branch p-2 col-auto shadow-lg">
                        <h2 className="">Branch</h2>
                    </div>
                    <div className="rounded-3 branch p-2 col-auto shadow-lg">
                        <h2 className="">Branch</h2>
                    </div>
                    <div className="rounded-3 branch p-2 col-auto shadow-lg">
                        <h2 className="">Branch</h2>
                    </div>
                </div>
            </section>
            <div className="mx-auto mb-4 col-lg-6">
                <img width="100%" height="100%" style={{borderRadius: "100%"}} src={img.default} />
            </div>
        </article>
    )
}