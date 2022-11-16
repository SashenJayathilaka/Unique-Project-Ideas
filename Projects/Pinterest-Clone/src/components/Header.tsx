import React, { useState } from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import FaceIcon from "@material-ui/icons/Face";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";

type HeaderProps = {
  onSubmit: any;
};

const Header: React.FC<HeaderProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>("");

  const onSearchSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(input);
    //console.log("This Is the Input", input);
    //setInput("");
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon
            style={{
              color: "#e60023",
              fontSize: "32px",
              cursor: "pointer",
              marginRight: "5px",
            }}
          />
        </IconButton>
      </LogoWrapper>

      <HomePageButton>
        <a style={{ color: "#fff" }} href="/">
          HomePage
        </a>
      </HomePageButton>
      <FlowingButton>
        <a style={{ color: "#000" }} href="/">
          Flowing
        </a>
      </FlowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input
              value={input}
              type="text"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              style={{ display: "none" }}
              type="submit"
              onClick={onSearchSubmit}
            ></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>

      <IconWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </IconWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;
const LogoWrapper = styled.div`
  .MUiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;
const HomePageButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    font-weight: 700;
  }
`;

const FlowingButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: white;

  a {
    text-decoration: none;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;
const SearchWrapper = styled.div`
  flex: 1;
`;
const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    width: 100%;
    border: none;
    margin-left: 5px;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }
`;

const IconWrapper = styled.div``;
export default Header;
