import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaAngleLeft, FaRegPaperPlane } from "react-icons/fa";

function TradeRequestMessageReply({ trade_request }) {
  const dispatch = useDispatch();

  const [tradeRequestComment, settradeRequestComment] = useState("");
  // const { _id } = JSON.parse(localStorage.getItem('userData'))
  const handleReplyRequest = (tradeRequestId) => {
    if (tradeRequestComment != "") {
      const data = {
        tradeRequestId,
        // traderId: _id,
        tradeRequestComment,
      };

      settradeRequestComment("");
    } else {
    }
  };
  return (
    <div className="tab-content_ratings-reviews_customer-reviews-wrapper_review_replay-wrapper">
      <textarea
        className="tab-content_ratings-reviews_customer-reviews-wrapper_review_replay-wrapper_reply-input"
        rows="1"
        name="tradeRequestComment"
        placeholder="reply"
        value={tradeRequestComment}
        onChange={(e) => {
          settradeRequestComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleReplyRequest(trade_request._id);
        }}
        className="tab-content_ratings-reviews_customer-reviews-wrapper_review_replay-wrapper_reply-btn"
      >
        <FaRegPaperPlane />
      </button>
    </div>
  );
}

export default TradeRequestMessageReply;
