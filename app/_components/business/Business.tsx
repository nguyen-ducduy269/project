import { BusinessCss } from "@/app/_style-components/business/BusinessCss";
import { Container } from "@/app/_style-components/home-page-css/Container";
import React from "react";

const BusinessPage = () => {
  return (
    <BusinessCss>
      <Container>
        <div className="drop-shipping">
          <div className="shipping-img">
            <img
              src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-603aa710--Shipping728.jpg?v=1606348405"
              alt=""
            />
          </div>

          <div className="shipping-content">
            <h1 className="title">Wholesale | Dropshipping</h1>

            <h1>We Ship House Plants</h1>

            <p>
              House Plant Shop offers house plants for wholesale prices to
              businesses of all sizes.
            </p>

            <p>
              Our network of growers and in-house greenhouse operations work
              with retailers to offer a large selection of indoor foliage. From
              sourcing and storing plants to transporting large quantities
              nationwide - House Plant Wholesale can assist in reducing cost and
              growing indoor foliage sales.We also offer drop-shipping and
              gifting services.
            </p>

            <div className="dropshipping">
              <button>Dropshipping</button>
            </div>

            <div className="wholesale">
              <button>Wholesale</button>
            </div>
          </div>
        </div>
      </Container>

      <div className="quantity-shipper">
        <p>
          <i>
            Quality House Plants Shipped Directly to your Customer, Retail
            Store, or Distribution Center
          </i>
        </p>

        <p>
          <i>We are making selling plants easy.</i>
        </p>
      </div>

      <div className="work">
        <Container>
          <h1>How It Works</h1>

          <h1 style={{ fontWeight: 300 }}>
            Create an account for free and start selling plants today.
          </h1>

          <div className="start-work">
            <div className="start">
              <img
                src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-8db4dd1a--dropshiplogo0101-Edited.jpg?v=1606348874"
                alt=""
              />
              <p>
                Our dropshipping service ships plants for your e-commerce
                business.
              </p>

              <p>
                Once you have an order you need shipped, you will simply place
                the order on your customer&apos;s behalf on this website. We
                will ship the order with unbranded packaging directly to your
                customer.
              </p>

              <p>
                We also have integration capabilities with Shopify so orders can
                by automatically processed and shipped. Please contact us for
                more integration instructions.
              </p>

              <p>www.houseplantdropship.com</p>
            </div>

            <div className="start">
              <img
                src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-1e598db4--HPWholesalelogostacked01-Edited-Edited.jpg?v=1606348814"
                alt=""
              />
              <p>
                Our Wholesale service ships house plant orders on pallets
                directly to your store, restaurant, or distribution center.
              </p>

              <p>
                Simply create a wholesale account with your company information
                and browse / shop our online catalog.
              </p>

              <p>Orders usually ship within 2-3 weeks.</p>

              <p>www.houseplantwholesale.com</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="statistical">
        <Container>
          <div className="statisty">
            <div className="stat">
              <h1>50+</h1>
              <p>Partners</p>
            </div>

            <div className="stat">
              <h1>1000+</h1>
              <p>Orders shipped per day</p>
            </div>

            <div className="stat">
              <h1>500+</h1>
              <p>Product SKU&apos;s</p>
            </div>

            <div className="stat">
              <h1>500,000+</h1>
              <p>HAPPY CUSTOMERS</p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="email">
          <h1>Email us with any questions</h1>
          <h2>info@houseplantdropship.com</h2>
          <h2>info@houseplantwholesale.com</h2>
        </div>
      </Container>
    </BusinessCss>
  );
};

export default BusinessPage;
