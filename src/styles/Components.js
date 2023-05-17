import { styled } from "styled-components";
import { Colors, StFlexAll, StFlexCon } from "./GlobalStyles";

export const StInput = styled.input`
  width: 100%;
  line-height: 2rem;
  font-size: 0.8rem;
  padding: 1% 3%;
  margin: 1.2% 0;
  background-color: ${Colors.borderGrey};
  border: 1px solid rgb(219, 219, 219);
  border-radius: 3px;
  &:focus {
    outline: 2px solid ${Colors.buttonBlue};
  }
`;

export const StValidation = styled.span`
  font-size: 0.8rem;
  color: ${Colors.buttonBlue};
`;

//Signup
export const StLabel = styled.label`
  font-size: 0.9rem;
  padding: 1% 0;
`;

export const StProfile = styled.div`
  width: 100px;
  line-height: 100px;
  font-size: 0.7rem;
  text-align: center;
  color: #ccc;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 50%;
  box-shadow: ${Colors.shadow2};
  background: ${(props) => `url(${props.image}) no-repeat 50% /cover`};
`;

export const StButton = styled.button`
  width: ${(props) => props.width || "100%"};
  line-height: 2rem;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-top: 10px;
  background-color: ${(props) => props.bgcolor || Colors.buttonBlue};
  border: none;
  border-radius: 7px;
  box-shadow: ${Colors.shadow};
`;

export const StLinkCon = styled.div`
  width: 100%;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 15%;

  a {
    color: ${Colors.buttonBlue};
    font-weight: bold;
  }
`;

export const StImageUpload = styled.div`
  padding: 5%;
  margin-bottom: 3%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: ${Colors.shadow};

  input {
    padding-top: 3%;
  }
`;

export const StEmailChecking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 75%;
  }

  button {
    width: 20%;
    margin: 0;
  }
`;

// Story
export const StStory = styled(StFlexAll)`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background: linear-gradient(to right, #ffb300, #ff1459, #d400c1);
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border: 2.5px solid #fff;
    border-radius: 50%;
  }
`;

// Feed
export const StFeedTitle = styled(StFlexCon)`
  align-items: center;
  padding: 8px 0;

  svg,
  i {
    cursor: pointer;
  }
`;

export const StUserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    padding: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #444;
  }
`;

export const StPhoto = styled.div`
  width: 100%;
  min-height: 585px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const StButtons = styled(StFlexCon)`
  button {
    background-color: transparent;
    padding: 8px 16px 8px 0;
    border: none;
    cursor: default;
    transition: all 0.3s;

    &:active {
      transform: scale(1.2);
    }

    svg,
    i {
      color: #222;
      font-size: 24px;
      cursor: pointer;
    }
  }
`;

export const StLeftCon = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
  padding-top: 6px;
`;

export const StContent = styled.div`
  padding-bottom: 20px;
  margin-bottom: 12px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  line-height: 19px;

  span {
    color: #333;
    display: block;
    padding: 3px 0;
    cursor: pointer;
  }

  p {
    color: #777;
    padding: 2px 0 4px;
    cursor: pointer;
  }
`;
