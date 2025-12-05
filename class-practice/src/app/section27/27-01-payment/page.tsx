"use client";

import * as PortOne from "@portone/browser-sdk/v2";
import { v4 } from "uuid";

export default function PaymentPage() {
  const onClickPayment = async () => {
    const response = await PortOne.requestPayment({
      // Store ID 설정
      storeId: "store-b466a00e-7079-47c9-85f1-e9a609925953",
      // 채널 키 설정
      channelKey: "channel-key-99f443df-86b8-4848-b577-b05ab7d37dce",
      paymentId: `payment-${v4()}`,
      orderName: "키링",
      totalAmount: 90000,
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",
      customer: {
        fullName: "철수",
        phoneNumber: "010-2555-2343",
        email: "a@a.com",
        address: {
          country: "COUNTRY_KR",
          addressLine1: "서울시 ...",
          addressLine2: "3층",
        },
        zipcode: "1111",
      },
      redirectUrl: "http://loaclhost:3000/결제후돌아올영수증페이지", // 모바일결제시, 결제 후 다시 돌아올 내 홈페이지 주소
    });
    console.log(response);

    //백엔드에 저장하기 로직 들어감 => 숙제 API에서 사용(주의: notion 수업자료에 있는 storeId, channelKey로 변경하기) => 실제 백엔드에서 결제상태를 검증하기 때문
    //createPointTransactionOfLoading(paymentId: ...)
  };

  return <button onClick={onClickPayment}>결제하기</button>;
}
