import React, { useEffect, useState } from "react";
import "./NFT_Success.css";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function NFT_Success() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getLoadingment();
  });

  const getLoadingment = () => {
    setIsLoading(true);
  };
  return (
    <div className="nft_success">
      <div className="form_container">
        <div className="success_ment">
          계약서 NFT가 성공적으로 발행되었습니다 !
        </div>
        <div className="submit">
          <button onClick={() => navigate("/")}>HOME</button>
          <button onClick={() => navigate("/mypage")}>마이페이지로 가기</button>
        </div>
      </div>
      {isLoading ? <Loading /> : ""}
    </div>
  );
}

export default NFT_Success;
