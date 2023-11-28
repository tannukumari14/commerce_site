import React from 'react';

const Home=()=>{
    return(
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                <img src="https://static.vecteezy.com/system/resources/previews/028/793/242/non_2x/e-commerce-shopping-cart-with-multiple-products-a-sunlit-abstract-background-e-commerce-concept-ai-generative-free-photo.jpg" class="d-block w-100"  alt="shoping" style={{height:600,width:100}}/>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article6229.jpg" class="d-block w-100" alt="shoping" style={{height:600,width:100}}/>
                </div>
                <div class="carousel-item">
                <img src="https://www.gulftoday.ae/-/media/gulf-today/images/articles/business/2020/10/11/online-shopping-750.ashx?h=450&w=750&hash=21366F03F89C7E17EA9A9FAF6EAE39A3" class="d-block w-100" alt="shoping" style={{height:600,width:100}}/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Home;
