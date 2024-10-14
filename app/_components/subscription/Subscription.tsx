import { Container } from "@/app/_style-components/home-page-css/Container";
import { SubscriptionCss } from "@/app/_style-components/subscription/SubscriptionCss";
import React from "react";

const SubscriptionPage = () => {
  return (
    <SubscriptionCss>
      <div className="header-image">
        <img
          src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-99b8460b--house-plant-box-logo.png?v=1603725902"
          alt=""
        />
      </div>

      <div className="boxs">
        <Container>
          <div className="box">
            <div className="box-image">
              <img
                src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-9ba901ab--HPSSub-BoxMonthly.jpg?v=1603725993"
                alt=""
              />
            </div>

            <div className="description">
              <h2>
                Our House Plant Subscription Box is operated through
                www.houseplantbox.com
              </h2>

              <h2>
                To login or subscribe, please visit our specific subscription
                box website.
              </h2>

              <a href="https://houseplantbox.com/">www.houseplantbox.com</a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="form">
          <div className="choose-from">
            <div className="choose-image">
              <img
                src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-a901abc6--HPSSub-BoxPremiumsquare.jpg?v=1603726324"
                alt=""
              />
            </div>

            <div className="choose-content">
              <h1>Over 11 Boxes to Choose From</h1>

              <p>
                Plants come in all shapes and sizes so to make it easy, we have
                created over 11 different boxes with different plant
                arrangements.
              </p>
            </div>
          </div>

          <div className="healthy-plants">
            <div className="healthy-content">
              <h1>Over 11 Boxes to Choose From</h1>

              <p>
                Plants come in all shapes and sizes so to make it easy, we have
                created over 11 different boxes with different plant
                arrangements.
              </p>
            </div>

            <div className="healthy-image">
              <img
                src="https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-a901abc6--HPSSub-BoxPremiumsquare.jpg?v=1603726324"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="delivered">
        <Container>
          <div className="deliver">
            <h1>Get a Dose of Plant-Happiness Delivered Every Month.</h1>

            <p>
              A fresh plant directly from the greenhouse is delivered to you in
              a simple monthly box. This is the perfect gift for yourself and
              others. Each box includes a detailed care guide to help you care
              for your new friend.
            </p>

            <a href="https://houseplantbox.com/">
              Explore www.houseplantbox.com
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="testimonials">
          <h1>Testimonials</h1>

          <div className="test">
            <div className="title">Chelsea D.</div>
            <div className="content">
              When I learned that monthly plant subscriptions exist, I
              immediately subscribed to houseplantbox. I read the reviews and
              wasn’t really sure what to expect, but my first plant arrived
              today (just 5 days after placing my order) and I’m thrilled. My
              baby’s tears plant shipped quickly, was well packaged and had zero
              damage. The plant was well watered and is full and healthy. I’m
              super pleased so far and I’m looking forward to many more months
              of plants.
            </div>
          </div>

          <div className="test">
            <div className="title">Sarah K.</div>
            <div className="content">
              We gifted this subscription to my Mother in law as a Mother&apos;s
              Day Gift. She has always been a plant lover, but she said this was
              the coolest gift she has ever gotten. She loved the surprise
              element as well as the uniqueness of the plants themselves. We did
              have a small issue when the subscription auto-renewed (even though
              we had selected for it not to renew after the 3 months), but the
              seller was amazing to refund the 2nd subscription when we reached
              out to them. Was very pleased with this purchase and interaction!
            </div>
          </div>

          <div className="test">
            <div className="title">Katie M.</div>
            <div className="content">
              I love plants and really want to start a collection this year. My
              biggest issue is that I own 7 dogs and a cat. Well this box is
              perfect because they offer pet friendly boxes! My first plant did
              take a while to ship but that it is because unlike other boxes
              they only ship a certain time of the month. I was fine with
              waiting. The plant arrived well packages and safe and looks great.
              I think the price is super fair and about on par with what I would
              pay at my cheap local nursery that I often buy from too. I would
              recommend this to anyone who wants to treat themselves to a new
              plant and doesn&apos;t need it right now. I&apos;ll probably sign
              up for another option and gift a few boxes for upcoming birthdays
              because it&apos;s an awesome gift.
            </div>
          </div>
        </div>
      </Container>
    </SubscriptionCss>
  );
};

export default SubscriptionPage;
