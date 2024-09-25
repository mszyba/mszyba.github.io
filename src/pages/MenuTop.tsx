import { Bar, Button, Link, Title } from "@ui5/webcomponents-react";
import React from "react";

export default function MenuTop() {
  return (
    <div>
      <Bar
        design="Header"
        endContent={
          <>
            <Link href="https://github.com/mszyba" style={{marginLeft: '6px'}} target="_blank"><s/></Link>
          </>
        }
        startContent={
          <>
            <Button design="Transparent" icon="nav-back"/>
          </>
        }
      >
        <Title>
          Anembok
        </Title>
      </Bar>
    </div>
  );
}