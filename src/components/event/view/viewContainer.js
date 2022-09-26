import React from "react";

import { useEventContext } from "../../../contexts/eventContext";

import styled from "styled-components";

const Container = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.ipad}) {
    margin-top: 88px;
  }
  & > img {
    width: 375px;
    height: 375px;
    left: calc(50% - 375px / 2);
  }

  & > div {
    & > h1 {
      width: 327px;
      height: 37px;
      left: calc(50% - 327px / 2 - 4px);

      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;

      color: ${(props) => props.theme.colors.primary1};
    }
    & > p {
      width: 341px;
      height: 15px;
      left: calc(50% - 341px / 2 + 3px);

      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;

      color: ${(props) => props.theme.colors.neutral2};
    }

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      padding: 10px 10px 10px 10px;

      width: 100%;

      & > img {
        width: 40px;
        height: 40px;
        border-radius: 5px;
      }

      & > div {
        margin-left: 10px;
        & > h1 {
          width: 138px;
          height: 18px;

          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 18px;

          color: ${(props) => props.theme.colors.primary1};
          margin: 0px;
        }
        & > p {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: ${(props) => props.theme.colors.neutral1};
          margin: 0px;
        }
      }
      & > span {
        display: flex;
        align-items: center;

        margin-left: auto;

        width: 40px;
        height: 40px;

        border-radius: 5px;
      }
    }
  }
`;

function ViewContainer() {
  const { event } = useEventContext();

  const getDate = (date) => {
    const dateObj = new Date(date);

    if (isNaN(dateObj.getTime())) return "18 Auguest 6:00 PM";

    const month = dateObj.toLocaleString("default", { month: "long" });
    const day = dateObj.getDate();
    const time = dateObj.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return `${day} ${month} ${time}`;
  };

  const getStreetAddress = () =>
    (event.streetName, event.city, event.state)
      ? `${event.streetName}, ${event.city}, ${event.state}`
      : "301 Rowes Lane, WA, 7183";

  return (
    <Container>
      <img src="/images/Birthdaycake.png" alt="event" />
      <div>
        <h1>{event.name || "Birthday Bash"}</h1>
        <p>
          Hosted By : <b>{event.by || "Elysia"}</b>
        </p>
      </div>
      <div>
        <div>
          <img src="/images/Birthdaycake.png" alt="" />
          <div>
            <h1>{getDate(event.startDate)}</h1>
            <p>
              to <b>{getDate(event.endDate)}</b> UTC +10
            </p>
          </div>
          <span>{">"}</span>
        </div>
      </div>
      <div>
        <div>
          <img src="/images/Birthdaycake.png" alt="" />
          <div>
            <h1>Street name</h1>
            <p>{getStreetAddress()}</p>
          </div>
          <span>{">"}</span>
        </div>
      </div>
    </Container>
  );
}

export default ViewContainer;
