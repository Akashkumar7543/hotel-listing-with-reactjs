import React, { useState } from 'react'
import "../TapMenu/tab.css";
import Menu from './list';
import"../TapMenu/showmore.js";
import 'bootstrap-icons/font/bootstrap-icons.css';


const GalleryReact = () => {
    const[items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItem = Menu.filter((curElem) => {
           return curElem.city === categItem;
        });
        setItems(updatedItem);
    }
    
    
    return (
        <>  <div class="container">
            <h1>Features Listed properly </h1>
            <p>Real estate can be bought, sold, leased or rented, and can be<br></br>
                valuable investment opportunity. The value of real estate can be..</p>
        </div>
        <div class="btn">
             <button class="btn btn-outline-primary" onClick={() => filterItem('NewYork')}>New York</button>
             <button class="btn btn-outline-primary"onClick={() => filterItem('Mumbai')}>Mumbai</button>
             <button class="btn btn-outline-primary"onClick={() => filterItem('Paris')}>Paris</button>
             <button class="btn btn-outline-primary"onClick={() => filterItem('London')}>London</button>
             {/* <button onClick={loadMoreProperties}>Show More</button> */}
             
        </div>
        <div class="viwebtn">
        <button class="btn btn-outline-primary">View All</button>
        </div>
        <div className="menu-items conteiner-fluid mt-5">
            <div className="row">
                <div className="col-11 mx-auto">
                   <div className="row my-5">
                    
                    {
                        items.map((elem) => {
                             const{image, descption, locatin , room, bed, bath, price,  squrefit} = elem;
                            
                             return(
                                <div className="item1 col-3 col-md-6 col-lg-6 col-xl-4">
                                    <div className="col-md-10 mb-3">
                                <div class="card">
                                <img class="card-img-top" src={image} alt={locatin}/>
                                <div class="card-body">
                                  <p class="card-title"><i class="bi bi-geo-alt"></i> {locatin}</p>
                                  <h5 class="card-text">{descption}</h5>
                                  
                                 
                                </div>
                                <div class="btnrent">
                                  <button type="button" class="btn btn-outline-primary">For Rent</button>
                                  </div>
                                  <div class="btnread">
                                  <button type="button" class="btn btn-outline-primary">Read More</button>
                                  </div>
                              
                            <div className="menu-price-book">
                                <div className="price-book-divide d-flex justify-content-between">
                               
                               
                                <p className="room"><i class="bi bi-building"></i>{room}</p>

                                <p className="bed"><i class="bi bi-segmented-nav"></i>{bed}</p>
                                <p className="bath"><i class="bi bi-bezier2"></i>{bath}</p>
                                <p className="squrefit"><i class="bi bi-compass"></i>{squrefit}</p>
                                <p className="heart"><i class="bi bi-heart"></i></p>
                                <hr/>
                                <p className="price">{price}</p>
                                
                                    
                                   
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    
                             )
                        })
                    }


                    </div>
                   
                </div>
            </div>
            </div>
        </>
    )
};

export default GalleryReact;
