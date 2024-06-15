// components/ProyectsGallery.tsx
import React from "react";
import Main from "./Main";
import HeaderInterna from "./HeaderInterna";
import { Table } from "./Table";
import ProyectsInterna from "./ProyectsInterna";
import Button from "./Button";

const InternaCompo = () => {
  return (
    <Main>
      <HeaderInterna />
      <Table />
      <ProyectsInterna />
      
    </Main>
  );
};

export default InternaCompo;
