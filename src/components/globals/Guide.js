import React from 'react'
import { QuestionDiamondFill } from 'react-bootstrap-icons';

export default function Guide({ params }){
    const { direction, img } = params
    return(
        <article>
            <section className={`shadow-lg d-flex ${direction} col-auto mx-auto`}>
                <div className="col-lg-6 p-3 align-self-center">
                    <h1 className="fw-bold">Great Header
                    <span className="mx-4 link helpLink"><QuestionDiamondFill /></span>
                    </h1>
                    <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>
                </div>  
            <div className="col-lg-6"><img width="100%" height="100%" src={img.default} /></div>
            </section>
    
        </article>
    )
}