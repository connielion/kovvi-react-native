import React, { useState } from "react";
import styled from "styled-components/native";

const SearchbarWrapper = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 50px;
  background-color: #fbfbfc;
  border: 1px solid #f0f0f3;
  border-radius: 50px;
  z-index: -1;
`;

const SearchbarInput = styled.TextInput`
  width: 95%;
  height: 84%;
  padding-right: 10px;
  padding-left: 10px;
  background-color: ${({ isFocus }) => (isFocus ? "#e2e2e8" : "#fbfbfc")};
  border: ${({ isFocus }) => (isFocus ? "1px solid #c6c6d1" : "none")};
  border-radius: 50px;
`;

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SearchbarWrapper>
      <SearchbarInput
        defaultValue=""
        value={searchInput}
        isFocus={isFocus}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(!searchInput.length ? false : true)}
        onChangeText={(text) => setSearchInput(text)}
      />
    </SearchbarWrapper>
  );
};

export default Searchbar;
