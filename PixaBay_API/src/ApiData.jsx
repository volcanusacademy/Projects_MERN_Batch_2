import React from 'react';

const ApiData = ({ data }) => {
    return (
        <>
            <div className="container card" style={{ width: "67rem", margin: "auto" }}>
                {data?.map((item) => (
                    <div key={item.id}>
                        <img src={item.largeImageURL} className="card-img-top" alt="" />
                        <div className="card-body" >
                        <h4 className="card-title">{item.type}</h4>
                        <h3 className='card-text'>{item.pageURL}</h3>
                        </div>    
                    </div>

                  




                ))}
            </div>
        </>
    );
}

export default ApiData;
