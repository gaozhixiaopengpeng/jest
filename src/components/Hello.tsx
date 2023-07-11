import React, { CSSProperties, FC } from "react";
import { Col, Row } from "antd";

interface Props {
  type: "large" | "small";
  title: string;
}

const largeStyle: CSSProperties = {
  fontSize: "2rem",
  color: "red",
};

const smallStyle: CSSProperties = {
  fontSize: "1rem",
  color: "green",
};

const styles: Record<"small" | "large", CSSProperties> = {
  small: smallStyle,
  large: largeStyle,
};

const Hello: FC<Props> = (props) => {
  const { title, type } = { ...props };
  return (
    <Row style={styles[type]}>
      <Col>第一个 Col</Col>
      <Col>
        <div>{title}</div>
      </Col>
    </Row>
  );
};

export default Hello;
