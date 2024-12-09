import { Tag } from "antd";

export function DataSourceIndicator({ isFromCache }) {
  return (
    <Tag color={isFromCache ? "blue" : "green"}>
      Data from: {isFromCache ? "Local Storage" : "API"}
    </Tag>
  );
}
