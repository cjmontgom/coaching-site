import {
  ReviewQuotation,
  ReviewText,
  ReviewWrapper
} from "../../styles/home/review.styles";
import quotationLeft from "../../images/quotationLeft.png";
import quotationRight from "../../images/quotationRight.png";
import React from "react";

const Review = () => (
  <ReviewWrapper>
    <ReviewQuotation src={quotationLeft} alt="Quotation marks." />
    <ReviewText>
      Allison instantly puts me at ease and creates a safe space to speak freely
      and work through whatever is on my mind. In our sessions I have been
      exploring spirituality and faith, as well as navigating the confusion
      involved in accepting my sexuality. Allison has a unique ability to listen
      and respond with guidance and thought provoking insights. This is really
      helping me to find the clarity I am searching for and I always leave with
      a lighter heart and a lifted spirit.
      <br />
    </ReviewText>
    <ReviewQuotation
      endQuote={true}
      src={quotationRight}
      alt="Quotation marks."
    />
  </ReviewWrapper>
);

export default Review;
