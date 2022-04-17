import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <h1 className='text-center mt-5'>Services</h1>
            <hr className='w-25 mx-auto mb-5' />
            <div className='row mx-auto'>
                {
                    services.map(service => {
                        const { name, img, price, description } = service;

                        return (
                            <div key={service.id} className="col-12 col-md-4 pb-5">

                                <Card style={{ width: '22rem' }} className="shadow-sm">
                                    <Card.Img variant="top" className='img-thumbnail' src={img} />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <h5>{price}$</h5>
                                        <Card.Text>
                                            {description}
                                        </Card.Text>
                                        <Link className='btn btn-primary' to={'/checkout'}>Add to Cart</Link>
                                    </Card.Body>
                                </Card>

                            </div>

                        );
                    })
                }
            </div>
        </div>

    )


};

export default Services;